import styles from './ProjectsStyles.module.css';
import ecommerce from '../../assets/Ecommerce.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ecommerce}
          link="https://github.com/Rephaelaplacador/Ecommerce-MERN"
          h3="Ecommerce"
          p="E-commerce"
        />
      </div>
    </section>
  );
}

export default Projects;
