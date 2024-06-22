import sharedStyles from '../../_shared/styles.module.css';

const TermsPage = () => (
  <>
    <h1>Terms of Use</h1>
    <h2 className={sharedStyles.header2}>Introduction</h2>

    <p>
      Welcome to Segebre.dev. By accessing and using this website, you agree to
      comply with and be bound by the following terms and conditions. These
      terms, along with our privacy policy, govern Segebre.dev's relationship
      with you in relation to this website. If you do not agree with any part of
      these terms, please do not use our website.
    </p>
    <h2 className={sharedStyles.header2}>Acceptance of Terms</h2>
    <p>
      By accessing and using segebre.dev, you agree to comply with and be bound
      by these Terms of Use. If you do not agree, please do not use this
      website.
    </p>

    <h2 className={sharedStyles.header2}>Changes to Terms</h2>
    <p>
      We reserve the right to modify these terms at any time. The up-to-date
      version will continue to be available on this page, and your continued use
      of the site constitutes acceptance of those changes.
    </p>

    <h2 className={sharedStyles.header2}>Use of Content</h2>
    <p>
      The content on segebre.dev is for informational purposes only. While we
      strive for accuracy, we do not guarantee the completeness or reliability
      of any information presented.
    </p>

    <h2 className={sharedStyles.header2}>Intellectual Property</h2>
    <p>
      All content on this website, unless otherwise stated, is the property of
      segebre.dev. You may not reproduce, distribute, or use the content without
      explicit permission.
    </p>

    <h2 className={sharedStyles.header2}>User Responsibilities</h2>
    <p>
      You agree to use this website only for lawful purposes. You must not use
      it in any way that may damage the site, interfere with other users'
      enjoyment, or infringe on the rights of others.
    </p>

    <h2 className={sharedStyles.header2}>Links to Other Websites</h2>
    <p>
      segebre.dev may contain links to third-party websites. We do not endorse
      these sites and are not responsible for their content or practices.
    </p>

    <h2 className={sharedStyles.header2}>Limitation of Liability</h2>
    <p>
      segebre.dev is provided "as is" without warranties of any kind, either
      express or implied. We are not liable for any direct, indirect,
      incidental, consequential, or punitive damages arising from the use or
      inability to use this site.
    </p>

    <h2 className={sharedStyles.header2}>Severability</h2>
    <p>
      If any provision of these Terms of Use is found to be invalid or
      unenforceable by a court of competent jurisdiction, the remaining
      provisions will remain in full force and effect.
    </p>

    <h2 className={sharedStyles.header2}>Contact Information</h2>
    <p>
      For any questions about these Terms of Use, please{' '}
      <a href="mailto:terms@segebre.dev">contact us at terms@segebre.dev</a>.
    </p>
  </>
);

export { metadata } from './metadata';
export default TermsPage;
