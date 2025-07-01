import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {FiPlus, FiBookOpen, FiClipboard, FiGrid} from 'react-icons/fi';
import Modal from '../components/Modal';
import SectionCard from '../components/SectionCard';
import {QRCodeSVG} from 'qrcode.react';

const QrGeneratorPage = () => {
    const [courses, setCourses] = useState([]);
    const [classes, setClasses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isCourseModalOpen, setCourseModalOpen] = useState(false);
    const [isClassModalOpen, setClassModalOpen] = useState(false);
    const [newCourseName, setNewCourseName] = useState('');
    const [newClassName, setNewClassName] = useState('');
    const [newClassHorario, setNewClassHorario] = useState('');
    const [selectedCourseId, setSelectedCourseId] = useState('');
    const [formError, setFormError] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const [coursesRes, classesRes] = await Promise.all([
                    axios.get('http://127.0.0.1:8000/api/main/cursos/', {signal: controller.signal}),
                    axios.get('http://127.0.0.1:8000/api/main/clases/', {signal: controller.signal})
                ]);
                const coursesData = coursesRes.data.results || coursesRes.data;
                const classesData = classesRes.data.results || classesRes.data;
                setCourses(coursesData);
                setClasses(classesData);
                if (coursesData && coursesData.length > 0) {
                    setSelectedCourseId(coursesData[0].id);
                }
            } catch (err) {
                if (!axios.isCancel(err)) {
                    setError('No se pudieron cargar los datos. Revisa la consola para más detalles.');
                    console.error("Error al procesar los datos:", err);
                }
            }
            setLoading(false);
        };
        fetchData();
        return () => controller.abort();
    }, []);

    const handleAddCourse = async (e) => {
        e.preventDefault();
        setFormError('');
        if (!newCourseName.trim()) {
            setFormError('El nombre del curso no puede estar vacío.');
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/main/cursos/', {nombre: newCourseName});
            const newCourses = [...courses, response.data];
            setCourses(newCourses);
            if (newCourses.length === 1) setSelectedCourseId(newCourses[0].id);
            setNewCourseName('');
            setCourseModalOpen(false);
        } catch (err) {
            setFormError('Error al crear el curso. ¿Quizás el nombre ya existe?');
        }
    };

    const handleAddClass = async (e) => {
        e.preventDefault();
        setFormError('');
        if (!newClassName.trim() || !selectedCourseId) {
            setFormError('Debes seleccionar un curso y darle un nombre a la clase.');
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/main/clases/', {
                nombre: newClassName,
                horario: newClassHorario,
                curso: selectedCourseId
            });
            setClasses([...classes, response.data]);
            setNewClassName('');
            setNewClassHorario('');
            setClassModalOpen(false);
        } catch (err) {
            setFormError('Ocurrió un error al guardar la clase.');
        }
    };

    const closeModal = (modalSetter) => {
        modalSetter(false);
        setFormError('');
    };

    if (loading) return <main className="p-4 md:p-6"><p>Cargando datos...</p></main>;
    if (error) return <main className="p-4 md:p-6"><p className="text-red-500">{error}</p></main>;

    return (
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-gray-800">General</h1>
                <p className="text-gray-600">Edita o agrega cursos, estudiantes y sus respectivas clases y horarios.</p>

                <SectionCard title="Mis Cursos" icon={<FiBookOpen/>}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {courses.map(course => (
                            <div key={course.id} className="bg-white p-4 rounded-lg border">
                                <h4 className="font-bold text-gray-800 truncate">{course.nombre}</h4>
                                <p className="text-xs text-gray-500 mt-2">
                                    Clases: {classes.filter(cls => String(cls.curso) === String(course.id)).length}
                                </p>
                            </div>
                        ))}
                        <button onClick={() => setCourseModalOpen(true)}
                                className="flex flex-col items-center justify-center min-h-[100px] bg-gray-50 border-2 border-dashed rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors">
                            <FiPlus className="text-gray-400 mb-1" size={20}/>
                            <span className="text-sm font-semibold text-gray-600">Agregar curso</span>
                        </button>
                    </div>
                </SectionCard>

                <SectionCard title="Mis Clases" icon={<FiClipboard/>}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        {classes.map(cls => (
                            <div key={cls.id} className="bg-white p-4 rounded-lg border">
                                <h4 className="font-bold text-gray-800 truncate">{cls.nombre}</h4>
                                <p className="text-xs text-gray-500 mt-2">{cls.horario}</p>
                                <p className="text-xs text-gray-500">Curso: {courses.find(c => String(c.id) === String(cls.curso))?.nombre || 'N/A'}</p>
                            </div>
                        ))}
                        <button onClick={() => setClassModalOpen(true)}
                                className="flex flex-col items-center justify-center min-h-[100px] bg-gray-50 border-2 border-dashed rounded-lg hover:bg-gray-100 hover:border-gray-400 transition-colors">
                            <FiPlus className="text-gray-400 mb-1" size={20}/>
                            <span className="text-sm font-semibold text-gray-600">Agregar clase</span>
                        </button>
                    </div>
                </SectionCard>

                <SectionCard title="Código QR" icon={<FiGrid/>}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {classes.map(cls => (
                            <div key={cls.id}
                                 className="bg-white p-4 rounded-lg border flex flex-col items-center justify-center">
                                <QRCodeSVG value={cls.id} size={80}/>
                                <h4 className="font-semibold text-gray-800 text-sm mt-3 text-center">{cls.nombre}</h4>
                                <p className="text-xs text-gray-500 text-center">Asignado
                                    a {courses.find(c => String(c.id) === String(cls.curso))?.nombre || 'N/A'}</p>
                            </div>
                        ))}
                    </div>
                </SectionCard>
            </div>
            <Modal isOpen={isCourseModalOpen} onClose={() => closeModal(setCourseModalOpen)}>
                <form onSubmit={handleAddCourse}><h3 className="text-lg font-bold mb-4">Agregar Nuevo Curso</h3><input
                    type="text" value={newCourseName} onChange={(e) => setNewCourseName(e.target.value)}
                    placeholder="Nombre del curso" className="w-full p-2 border rounded-md"/>{formError &&
                    <p className="text-red-500 text-sm mt-2">{formError}</p>}
                    <button type="submit"
                            className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Guardar
                        Curso
                    </button>
                </form>
            </Modal>
            <Modal isOpen={isClassModalOpen} onClose={() => closeModal(setClassModalOpen)}>
                <form onSubmit={handleAddClass}><h3 className="text-lg font-bold mb-4">Agregar Nueva Clase</h3><select
                    value={selectedCourseId} onChange={(e) => setSelectedCourseId(e.target.value)}
                    className="w-full p-2 border rounded-md mb-3">{courses.length === 0 ? (
                    <option>Primero crea un curso</option>) : (courses.map(course => (
                    <option key={course.id} value={course.id}>{course.nombre}</option>)))}</select><input type="text"
                                                                                                          value={newClassName}
                                                                                                          onChange={(e) => setNewClassName(e.target.value)}
                                                                                                          placeholder="Nombre de la clase"
                                                                                                          className="w-full p-2 border rounded-md mb-3"/><input
                    type="text" value={newClassHorario} onChange={(e) => setNewClassHorario(e.target.value)}
                    placeholder="Horario (ej: Lunes 10-12)" className="w-full p-2 border rounded-md"/>{formError &&
                    <p className="text-red-500 text-sm mt-2">{formError}</p>}
                    <button type="submit"
                            className="w-full mt-4 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700">Guardar
                        Clase
                    </button>
                </form>
            </Modal>
        </main>
    );
};

export default QrGeneratorPage;