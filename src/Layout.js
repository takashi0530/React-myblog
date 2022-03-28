import styles from "./Layout.module.css";
import Header from "./Header";

const Layout = (props) => {
    return (
        <div className={styles.container}>

            {/* Header.jsを表示する */}
            <Header />

            <main>{props.children}</main>
            <footer className={styles.footer}>
                <p className={styles.copyright}>&copy; 2020 takashi</p>
            </footer>

        </div>
    );
};

export default Layout;