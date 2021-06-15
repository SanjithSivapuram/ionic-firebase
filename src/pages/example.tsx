import React from 'react';
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent } from '@ionic/react';

// IonList for lists
// IonButton for Buttons
// IonInput for inputs
const Example: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Example Page!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className='ion-padding'>
                Hello from example!
            </IonContent>
        </IonPage>
    );
};

export default Example;
