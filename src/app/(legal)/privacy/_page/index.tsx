import ExternalLink from '@/components/external-link';
import sharedStyles from '../../_shared/styles.module.css';

const PrivacyPage = () => (
  <>
    <h1>Privacy Policy</h1>
    <h2 className={sharedStyles.header2}>Introduction</h2>
    <p>
      Segebre.dev respects your privacy and is committed to protecting your
      personal data. This privacy policy explains how we handle your
      information.
    </p>
    <h2 className={sharedStyles.header2}>Data Collection</h2>
    <p>
      Segebre.dev does not collect any personal data, use cookies, nor track
      visitors. No personal data is shared with third parties.
    </p>
    <h2 className={sharedStyles.header2}>Hosting and Analytics</h2>
    <p>
      Segebre.dev is hosted on Vercel. Vercel may collect anonymized data for
      analytics purposes. You can{' '}
      <ExternalLink href="https://vercel.com/docs/analytics/privacy-policy">
        find more information on how Vercel handles privacy and compliance
        directly on their website
      </ExternalLink>
      .
    </p>
    <h2 className={sharedStyles.header2}>External Links</h2>
    <p>
      Our website may contain links to other sites. We are not responsible for
      their content nor privacy practices.
    </p>
    <h2 className={sharedStyles.header2}>Contact Information</h2>
    <p>
      If you have any concerns or questions about this privacy policy, please{' '}
      <a href="mailto:privacy@segebre.dev">contact us at privacy@segebre.dev</a>
      .
    </p>
    <h2 className={sharedStyles.header2}>Your Rights</h2>
    <p>
      Under various privacy laws, including GDPR, CCPA, CPRA, CalOPPA, PIPEDA,
      and Australia's Privacy Act, you have the right to access, correct, or
      delete any personal information we might hold about you. Since we do not
      collect any data, these rights are not applicable.
    </p>
    <h2 className={sharedStyles.header2}>Changes to This Policy</h2>
    <p>
      We may update this privacy policy from time to time. The up-to-date
      version will continue to be available on this page.
    </p>
    <h2 className={sharedStyles.header2}>Effective Date</h2>
    <p>This policy is effective as of 2024-06-22.</p>
  </>
);

export default PrivacyPage;
