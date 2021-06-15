import React, { useState } from 'react';
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonGrid, IonRow, IonCol, IonItem, IonInput, IonButton, IonIcon, IonLabel, IonLoading } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { logInOutline } from 'ionicons/icons';
import './Registration.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../firebaseConfig';
import { toast } from '../toast';

// IonList for lists
// IonButton for Buttons
// IonInput for inputs
const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [cpassword, setCpassword] = useState<string>('');
    const [busy, setBusy] = useState<boolean>(false);

    const history = useHistory();

    async function register() {
        // validation
        if (password !== cpassword) {
            return toast("Passwords do not match");
        };
        if (username.trim() === '' || password.trim() === '') {
            return toast("Username and Password are required");
        };
        setBusy(true);
        const res = await registerUser(username, password);
        if (res) {
            history.replace('/login');
            toast("You have registered successfully !");
        };
        setBusy(false);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar className='ion-text-center'>
                    <IonTitle>Register As A User</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message="Registration in progress!" duration={0} isOpen={busy} />
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
                        <IonCol>
                            <IonItem>
                                <IonLabel position='floating'>Confirm Password</IonLabel>
                                <IonInput type='password' onIonChange={(e: any) => setCpassword(e.target.value)}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className='ion-text-center'>
                            <IonButton onClick={register}>
                                <IonIcon slot='start' icon={logInOutline}></IonIcon>Register
                            </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol className='ion-text-center'>
                            <Link className="regtxtlnk" to="/login">Already have an account?</Link>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Register;