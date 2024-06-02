import sharedStyles from '../../_shared/styles.module.css';
import styles from './styles.module.css';

const Imprint = () => (
  <>
    <h1>Imprint</h1>
    <h2 className={sharedStyles.header2}>
      Information in accordance with § 5 TMG
    </h2>
    <p lang="de">
      Juan Enrique Segebre Zaghmout
      <br />
      c/o Tyagi
      <br />
      Buschingstraße 9
      <br />
      81677 München
      <br />
      Deutschland
    </p>
    <h2 className={sharedStyles.header2}>Contact Information</h2>
    <dl className={styles.contactDefinitionList}>
      <div>
        <dt>Email:</dt>
        <dd>
          <a href="mailto:hi@segebre.dev">hi@segebre.dev</a>
        </dd>
      </div>
      <div>
        <dt>Phone:</dt>
        <dd>
          <a href="tel:+4915224816539">+49 1522 4816539</a>
        </dd>
        <span aria-hidden="true"> / </span>
        <dd>
          <a href="tel:+4917659722532">+49 176 59722532</a>
        </dd>
      </div>
    </dl>
    <h2 className={sharedStyles.header2}>
      Responsible for content according to § 55 II RStV
    </h2>
    <p lang="de">
      Juan Enrique Segebre Zaghmout
      <br />
      c/o Tyagi
      <br />
      Buschingstraße 9
      <br />
      81677 München
      <br />
      Deutschland
    </p>
    <h2 className={sharedStyles.header2}>Disclaimer</h2>
    <p>
      The content on this website is for informational purposes only. While
      efforts are made to ensure the accuracy of the information, no guarantee
      is provided. The owner is not responsible for the content of external
      links. The operators of linked sites are solely responsible for their
      content.
    </p>
  </>
);

export { metadata } from './metadata';
export default Imprint;
