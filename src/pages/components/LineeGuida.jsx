import React from 'react';

const LineeGuida = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Le Linee Guida</h1>
        <p style={styles.subtitle}>Definiscono principi e regole da seguire per la progettazione, realizzazione e gestione dei servizi digitali.</p>
        <a href="#" style={styles.link}>SCOPRI TUTTE LE LINEE GUIDA &rarr;</a>

        <div style={styles.guideList}>
          <div style={styles.guideItem}>
            <div style={styles.icon}><img src="document-icon.png" alt="Document Icon" style={styles.iconImage} /></div>
            <div style={styles.info}>
              <div style={styles.tags}>
                <span style={styles.tag}>Linee Guida</span>
                <span style={styles.tag}>Conservazione</span>
                <span style={styles.tag}>Documento informatico</span>
              </div>
              <a href="#" style={styles.titleLink}>Linee Guida sulla formazione, gestione e conservazione dei documenti informatici</a>
              <p style={styles.fileInfo}>PDF | 780,7 KB</p>
            </div>
          </div>

          <hr style={styles.separator} />

          <div style={styles.guideItem}>
            <div style={styles.icon}><img src="document-icon.png" alt="Document Icon" style={styles.iconImage} /></div>
            <div style={styles.info}>
              <div style={styles.tags}>
                <span style={styles.tag}>Linee Guida</span>
                <span style={styles.tag}>Accessibilità</span>
              </div>
              <a href="#" style={styles.titleLink}>Linee Guida sull'accessibilità degli strumenti informatici - PA</a>
              <p style={styles.fileInfo}>PDF | 1,3 MB</p>
            </div>
          </div>

          <hr style={styles.separator} />

          <div style={styles.guideItem}>
            <div style={styles.icon}><img src="document-icon.png" alt="Document Icon" style={styles.iconImage} /></div>
            <div style={styles.info}>
              <div style={styles.tags}>
                <span style={styles.tag}>Linee Guida</span>
                <span style={styles.tag}>Accessibilità</span>
              </div>
              <a href="#" style={styles.titleLink}>Linee Guida sull'accessibilità degli strumenti informatici per soggetti privati</a>
              <p style={styles.fileInfo}>PDF | 398,6 KB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stile CSS in linea
const styles = {
  pageContainer: {
    backgroundColor: '#f0f0f0',  // Sfondo uniforme grigio per tutta la pagina
    padding: '40px',  // Spazio attorno alla sezione
  },
  container: {
    fontFamily: "'Titillium Web', sans-serif",
    padding: '20px 0',  // Aggiungi padding verticale per separare il testo dai bordi
    maxWidth: '1200px',  // Estende la larghezza per un aspetto più spazioso
    margin: '0 auto', // Centra il contenuto
  },
  title: {
    fontSize: '34px',
    fontWeight: '400', // Maggior peso per il titolo
    marginBottom: '20px',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: '300',
    color: '#555',
    marginBottom: '30px',
    textAlign: 'left',
  },
  link: {
    fontSize: '18px',
    color: '#007bff',
    textDecoration: 'none',
    marginBottom: '40px', // Più spazio per separare il link dal resto del contenuto
    display: 'block',
    textAlign: 'left',
  },
  guideList: {
    marginTop: '30px',
  },
  guideItem: {
    display: 'flex',
    alignItems: 'flex-start',  // Allinea in cima l'icona e il testo
    marginBottom: '30px',
    textAlign: 'left',
  },
  icon: {
    marginRight: '20px',  // Aumenta lo spazio tra l'icona e il testo
  },
  iconImage: {
    width: '36px',  // Icone leggermente più grandi per maggiore visibilità
    height: '36px',
  },
  info: {
    flexGrow: 1,
    textAlign: 'left',
  },
  tags: {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  },
  tag: {
    backgroundColor: '#e0e0e0',
    padding: '6px 12px',  // Aggiunge un po' più di spazio interno ai tag
    borderRadius: '5px',
    fontSize: '13px', // Font leggermente più grande per i tag
    fontWeight: '300',
  },
  titleLink: {
    fontSize: '20px',  // Font leggermente più grande per i link
    color: '#007bff',
    textDecoration: 'none',
    marginBottom: '8px', // Spazio più definito tra titolo e descrizione
    display: 'block',
    fontWeight: '400',
  },
  fileInfo: {
    fontSize: '16px',
    color: '#777',
    fontWeight: '300',
  },
  separator: {
    border: 'none',
    height: '1px',
    backgroundColor: '#ddd',
    margin: '20px 0',
  },
};

export default LineeGuida;
