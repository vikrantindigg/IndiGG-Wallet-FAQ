import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      {/* <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main> */}
      <p>
      ### What is IndiGG?

IndiGG is India’s biggest gaming guild for gamers to discover the future of gaming and embark on a journey into virtual worlds with digital property rights and earning rights. Alongside, IndiGG is also actively partnering with the best gaming studios globally and locally and playing a crucial role in their foray into the Indian market to build from the ground up with high-quality Web3 games.

### How do I install IndiGG Wallet?

The IndiGG Wallet is available for free on the Google Play Store. Download it here: [[System Requirements?]]

### How do I get started using IndiGG Wallet?

You need to sign-up for a free account and be a resident of India. Once you have verified your identity through KYC, you can use the IndiGG Wallet. Once your wallet is set up, you can start receiving IndiGG rewards, and receiving and sending payments with your cryptocurrencies.

### What is KYC?

KYC means “Know Your Customer” or sometimes “Know Your Client,” which refers to a procedure used by banks and other financial organizations to collect contact and identification information from existing and new clients. Its goal is to stop account abuse as well as fraud, money laundering, and other illegal conduct.

### What is a crypto wallet?

A crypto wallet is a digital tool that allows you to store, manage, and interact with cryptocurrencies like Bitcoin, Ethereum, and others. It provides a secure way to store your digital assets and allows you to send and receive payments using your cryptocurrency.

### Is it safe to use IndiGG Wallet?

Protecting the data of gamers is our top priority. It is important to take proper precautions to protect your digital assets. This includes using strong passwords and enabling two-factor authentication.

### How do I add funds to my wallet?

Currently, there are a few ways to add funds to your wallet:* Receive funds from another user by tapping ‘Receive’ and sharing your unique QR code or wallet address.* Redeem rewards by completing Quests or Missions and tapping ‘Redeem.’

- You can buy digital currencies from exchanges or from other users using traditional currency or other cryptocurrencies.

### How do I send payments using IndiGG Wallet?

Currently, you are only able to send tokens to other IndiGG Wallets. To send payments, tap ‘Send’. You will need the recipient's telephone number and the number of tokens you wish to send. Simply enter this information into your wallet and confirm the transaction. The payment will be processed on the blockchain, and the funds will be transferred to the recipient's wallet.

### Are there any fees associated with using IndiGG Wallet?

Yes, there may be fees associated with sending or receiving digital currencies. These fees typically come in the form of network fees, which are charged for processing transactions on the blockchain.

### Do I need a crypto wallet to join IndiGG?

No. When you create an account with IndiGG, we provide you with a wallet address on the Polygon blockchain. Any rewards you receive from completing Quests and activities are deposited into your IndiGG wallet.

### Do I need cryptocurrencies to use IndiGG Wallet?

No. The wallet is free to use and is the way you can earn rewards for being part of the IndiGG community.

### What currencies does IndiGG Wallet support?

We only support $USDT at this time.

### Does IndiGG Wallet Support NFTs?

Not yet, but we are working hard to constantly update and improve your experience using our app. Got a suggestion? We’d love to hear from you! Email us at: [feedback@indi.gg](mailto:feedback@indi.gg)

### Can I exchange my tokens for real money?

Yes! You can exchange your tokens for Indian Rupees only. Tap ‘Redeem’ and select the preferred bank account you wish to receive the funds.

### Why can’t I Send / Receive / Redeem my tokens?

A transaction may fail for a number of reasons, but the rate is usually low. The most common reason why a transaction fails is your connection to the internet. Ensure that you have a strong connection to Wifi or mobile data and try again.

If a transaction fails, your funds will always be safe in your wallet. If your transaction fails more than once, please contact Support so we can investigate the underlying cause.

### Is being a member of IndiGG a legitimate way to earn rewards?

Yes, IndiGG is a legitimate way to earn rewards by playing games on the blockchain. It is a community of gamers who have come together to support and encourage each other as they earn financial rewards through their gaming activities.

### How can I find and speak to other members of IndiGG?

A: We have a Discord server where a lot of members like to hang out and talk about games. To join the server, click on this link: [https://discord.gg/igg](https://discord.gg/igg)

Stay connected with us on our other social channels like Twitter, Instagram, Medium, and Substack.

### What kind of games can I play to earn rewards with IndiGG?

IndiGG offers a variety of games in many popular genres like sports, battle royale, and strategy that you can play to earn rewards. These games include popular titles like Bullieverse, Blast Royale, and War Legends.

Every month we add new and exciting games to discover and play. Be sure to check regularly or let us know if we should add one of your favorite games.

### How do I earn rewards with IndiGG?

As a member of IndiGG, you can earn rewards by playing games and participating in guild activities called ‘Quests’. The rewards you earn will depend on the games you play and the activities you participate in.

### Can I withdraw the rewards I earn with IndiGG?

Yes, you can withdraw the rewards you earn with IndiGG to another wallet or convert it into INR. To do so, you will need to connect a 3rd party wallet (like Metamask) or your bank details to your account. You can then withdraw your rewards to your wallet or chosen financial institution.
      </p>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
