import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Importaciones
import miFoto from './assets/unnamed.jpg';
import imgCascada from './assets/1_cascada.png';
import imgV from './assets/2_modelo_v.png';
import imgAgiles from './assets/3_agiles.png';
import imgScrum from './assets/4_scrum.png';
import imgKanban from './assets/5_kanvan.png';
import imgXP from './assets/6_xp.png';
import imgHibridas from './assets/7_hibridas_modernas.png';

// --- COMPONENTE 1: INICIO (HOME) ---
const Evaluacion = () => (
  <div className="container-main">
    <header className="header-content">
      <img src={miFoto} alt="Avatar" className="avatar-img" />
      {/* Título actualizado según tu imagen de referencia */}
      <h1 className="title">ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
      <div className="student-info">
        <h2>Alumno(a): <span>Sebastian Gonzalez de Leon</span></h2>
      </div>
      <nav className="links-container">
        <a href="https://www.linkedin.com/in/sebastian-gonzález-49050b34a" target="_blank" rel="noreferrer">LINKED IN DE MI PROFILE</a>
        <Link to="/documentacion" className="doc-link">DOCUMENTACION PARCIAL 1</Link>
        <Link to="/documentacion2" className="doc-link">DOCUMENTACION PARCIAL 2</Link>
      </nav>
    </header>
  </div>
);

// --- COMPONENTE 2: CENTRO DE DESCARGAS (PARCIAL 1) ---
const DownloadCenter = () => {
  const docs = [
    { id: 1, label: "COMANDOS BÁSICOS DE REACT", color: "btn-blue", link: "/docs/comandos (2).pdf" },
    { id: 2, label: "ISO / ESTANDAR IEEE", color: "btn-green", link: "/docs/ieee.pdf" },
    { id: 3, label: "CODIGO CURP", color: "btn-dark", link: "/docs/codigo curp.py" },
    { id: 4, label: "CÓDIGO PYTHON ALGORITMO SHA-256", color: "btn-dark", link: "/docs/Codigo Sha-256.txt" },
  ];
  return (
    <div className="download-page">
      <div className="card">
        <h1 className="card-title">Centro de Descargas</h1>
        <p className="card-subtitle">Haz clic en los botones para obtener tus archivos PDF.</p>
        <div className="button-group-vertical">
          {docs.map(doc => (
            <a key={doc.id} href={doc.link} className={`download-btn ${doc.color}`} download>{doc.label}</a>
          ))}
          <Link to="/" className="download-btn btn-dark-outline">REGRESAR AL INICIO</Link>
        </div>
      </div>
    </div>
  );
};

// --- COMPONENTE 3: METODOLOGÍAS (PARCIAL 2) ---
const Metodologias = () => {
  const [modal, setModal] = useState(null);

  const data = {
    cascada: { t: "Vista de Cascada", s: "El enfoque clásico secuencial", c: "Fases: Requisitos, Diseño, Implementación, Verificación y Mantenimiento.", img: imgCascada },
    v: { t: "Vista Modelo V", s: "Énfasis en calidad y verificación", c: "Relaciona etapas de desarrollo con pruebas.", img: imgV },
    agiles: { t: "Vista Metodologías Ágiles", s: "Enfoques Adaptativos", c: "Desarrollo iterativo e incremental.", img: imgAgiles },
    scrum: { t: "Vista Scrum", s: "El framework ágil más popular", c: "Sprints cortos con roles definidos.", img: imgScrum },
    kanban: { t: "Vista Kanban", s: "Gestión visual", c: "Uso de tableros para limitar el WIP.", img: imgKanban },
    xp: { t: "Vista XP", s: "Calidad del código", c: "Programación en parejas y pruebas constantes.", img: imgXP },
    hibridas: { t: "Vista Híbridas", s: "Combinando lo mejor de ambos mundos", c: "Espiral, DevOps y Lean.", img: imgHibridas }
  };

  return (
    <div className="download-page">
      <div className="card-full">
        <h1 className="meto-title">METODOLOGÍAS DE DESARROLLO DE SW</h1>
        <p className="description-text">Conjunto de técnicas y métodos organizativos para diseñar soluciones de software.</p>

        <h2 className="section-title">TIPOS DE METODOLOGÍAS</h2>
        <hr className="hr-style" />
        <div className="button-grid-center">
          <button onClick={() => setModal(data.cascada)} className="download-btn btn-blue">CASCADA</button>
          <button onClick={() => setModal(data.v)} className="download-btn btn-grey">MODELO V</button>
          <button onClick={() => setModal(data.agiles)} className="download-btn btn-green">ÁGILES</button>
          <button onClick={() => setModal(data.scrum)} className="download-btn btn-red">SCRUM</button>
          <button onClick={() => setModal(data.kanban)} className="download-btn btn-yellow">KANBAN</button>
          <button onClick={() => setModal(data.xp)} className="download-btn btn-cyan">XP</button>
          <button onClick={() => setModal(data.hibridas)} className="download-btn btn-dark">HÍBRIDAS</button>
        </div>
        <hr className="hr-style" />

        <h2 className="section-title">LINK A TABLERO DE TRABAJO</h2>
        <div className="nav-footer-center">
          <a href="https://voguevault.atlassian.net/jira/software/projects/ME/boards/34" className="btn-outline-blue" target="_blank" rel="noreferrer">---- JIRA ----</a>
        </div>

        <Link to="/" className="btn-outline-blue">---- REGRESAR MENÚ PRINCIPAL ----</Link>

        <div className="student-footer-info">
          <p>"Al que no agradece, el diablo se le aparece"</p>
          <p className="student-name">Alumno: Sebastian Gonzalez de Leon</p>
        </div>
      </div>

      {modal && (
        <div className="modal-overlay" onClick={() => setModal(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-x" onClick={() => setModal(null)}>&times;</button>
            <h2 className="modal-title">{modal.t}</h2>
            <h4 className="modal-subtitle">{modal.s}</h4>
            <p className="modal-body-text">{modal.c}</p>
            <img src={modal.img} alt={modal.t} className="modal-img-full" />
          </div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Evaluacion />} />
        <Route path="/documentacion" element={<DownloadCenter />} />
        <Route path="/documentacion2" element={<Metodologias />} />
      </Routes>
    </Router>
  );
}

export default App;