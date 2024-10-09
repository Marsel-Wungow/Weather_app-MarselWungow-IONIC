import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const About: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home"/>
                    </IonButtons>
                    <IonTitle>About</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <p>
                    Weather app merupakan aplikasi pengecekan cuaca. Aplikasi ini
                    dibuat menggunakan Ionic Framework.
                </p>
                <p>Nama : Marsel Marhaen Wungow / 22021106041</p>
            </IonContent>
        </IonPage>
    )
}

export default About;