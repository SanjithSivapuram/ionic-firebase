import { IonAvatar, IonButton, IonContent, IonHeader, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonPage, IonText, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonIcon, IonInput } from '@ionic/react';
import './Home.css';
import { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    console.log(input);
  }, [input]);
  return (
    <IonPage>
      <IonHeader className="ion-text-center">
        <IonToolbar>
          <IonTitle>Best App Ever</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="full" color="primary" routerLink='/login'>
                Login</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton expand="full" color="primary" routerLink='/register'>
                Register</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
