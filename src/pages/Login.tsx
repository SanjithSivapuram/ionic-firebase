import React, { useState } from 'react';
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonItem, IonInput, IonButton, IonIcon, IonLabel, IonLoading } from '@ionic/react';
import { logInOutline } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { loginUser } from '../firebaseConfig';
import { toast } from '../toast';
import { setUserState } from '../redux/actions';
import { useDispatch } from 'react-redux';

// IonList for lists
// IonButton for Buttons
// IonInput for inputs
const Login: React.FC = () => {
    const [busy, setBusy] = useState<boolean>(false);
    const history = useHistory();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useDispatch();

    async function login() {
        setBusy(true);
        const res: any = await loginUser(username, password);  //gives boolean value
        if (res) {
            dispatch(setUserState(res.user.email));
            history.replace('/dashboard');
            toast("You have logged in!");
        };
        setBusy(false);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='ion-text-center'>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="Please Wait" duration={0} isOpen={busy} />
            <IonContent className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'>Username</IonLabel>
                                <IonInput onIonChange={(e: any) => setUsername(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'>Password</IonLabel>
                                <IonInput type='password' onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className='ion-text-center'>
                            <IonButton onClick={login}>
                                <IonIcon slot='start' icon={logInOutline}></IonIcon>Login
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className='ion-text-center'>
                            <Link className="regtxtlnk" to="/register">Create an account</Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Login;
