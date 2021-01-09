import videosList from '../data/videos';
import styles from './videos.module.css';

export default function videos() {
  return (
    <section className={styles.videos}>
      {videosList.map((videoUrl) => {
        return (
          <iframe
            src={videoUrl}
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        );
      })}
    </section>
  );
}
