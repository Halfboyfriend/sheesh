import React from "react";
import Logo from "../images/logo.jpg";
import "./styles.css";
import { Button, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
        <div className="py-4">
            <span className="brand">Sheesh</span>
        </div>
      <section className="py-5 m-auto">
        <div>
          <div className="logo text-cent">
            <img src={Logo} altg="." />
          </div>

          <div className="write">
            <h1>SHEESH | PEPE</h1>
            <p>
              🚀 Introducing Sheesh Coin on the Solana blockchain! 🌐 Join the
              revolution with Pepe's iconic "sheesh" moment. 🤫 Don't miss out
              on the next big meme coin – grab your Sheesh today and let's make
              crypto history together! 🌙 #SheeshToTheMoon #CryptoRevolutio
            </p>

            <div className="mt-5">
              <Button primary fluid>
                Buy On Raydium
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center py-3">
          <h2>About Sheesh</h2>
          <p> Contract: TBA</p>
          <p>Sheesh Has 0% taxes 😮</p>
          <p> Sheesh Has burnt liquidity and mint authority revoked 🔥</p>

          <p> Sheesh Has a total supply of 1.000.000.000 Tokens 🪙</p>

          <div className="text-center mt-5">
            <Link to="https://twitter.com/sheesh_sol?t=Yh2Xl-leerEy5nQwYhzODQ&s=09">
              <Button>Twitter</Button>
            </Link>
            <Link to="https://t.me/sheesh_sol">
              <Button>Telegram</Button>
            </Link>
            <br />
            <p className="mt-3">
              <Link>
                <Button>Buy on Raydium</Button>
              </Link>
              <Link>
                <Button>Chart</Button>
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-5">
        <h2>How To Buy</h2>
        <ol>
          <li>
            Create a Wallet Choose and install any SOL wallet to your liking.
            You can use Phantom phantom.app
          </li>
          <li>
            Get Some SOL Add SOL in your wallet. If you want to change fast
            without CEX use a getmoney.exchange for bridging other currencies
          </li>
          <li>
            Go to Radium Connect your wallet and add our official contract.
          </li>
        </ol>
      </section>
    </Container>
  );
}

export default Home;
