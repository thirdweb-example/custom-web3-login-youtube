import { EmbeddedWallet, useAddress, useDisconnect, useWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Navbar() {
    const [userEmail, setUserEmail] = useState("");
    const disconnect = useDisconnect();
    const smartWallet = useWallet();
    const personalWallet = smartWallet?.getPersonalWallet();
    
    if (personalWallet instanceof EmbeddedWallet) {
        personalWallet.getEmail().then(email => {
            setUserEmail(email!);
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            borderRight: '1px solid #EEE',
            width: '15%',
            height: '100vh'
        }}>
            <h3 style={{
                width: '100%',
                padding: '0.5rem 1rem',
                marginBottom: '1rem',
            }}>My Custom App</h3>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%',
                height: '100%',
                padding: '0.5rem 1rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    marginRight: "1rem",
                    lineHeight: "0"
                }}>
                    <h4 style={{
                        marginBottom: "10px",
                    }}>Account:</h4>
                    <p style={{
                        color: "#333",
                        marginBottom: "5px",
                    }}>{userEmail}</p>
                </div>
                <button
                    className={styles.socialLoginBtn}
                    style={{
                        backgroundColor: "#FFF",
                        border: "1px solid #CCC",
                        borderRadius: "8px",
                        padding: "0.5rem 1rem",
                        width: "100%",
                    }}
                    onClick={disconnect}
                >Sign Out</button>
            </div>
        </div>
    );
}