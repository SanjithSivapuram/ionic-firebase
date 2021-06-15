import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonTitle, IonToolbar, IonContent, IonCard, IonGrid, IonRow, IonCol, IonLoading } from '@ionic/react';
import { Line, Bar, Pie, Doughnut } from 'react-chartjs-2';
import './Home.css';

// IonList for lists
// IonButton for Buttons
// IonInput for inputs
const Charts_: React.FC = () => {

    const [busy, setBusy] = useState<boolean>(true);

    function busyToggle() {
        setBusy(false)
    }

    setTimeout(busyToggle, 300);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Charts Page!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonLoading message='Loading Data Please Wait' duration={0} isOpen={busy} />
            <IonContent className='ion-padding'>
                <IonGrid>
                    <IonRow>
                        <IonCol size='6' className='ion-text-center'>
                            <IonCard className='ion-padding'>
                                <Bar type='bar' data={{
                                    datasets: [
                                        {
                                            label: 'Pneumonia Detection Accuracies',
                                            backgroundColor: 'rgba(129, 60, 25, 0.7)',
                                            borderColor: 'rgba(129, 60, 25,1)',
                                            borderWidth: 1,
                                            hoverBackgroundColor: 'rgba(129, 60, 25,1)',
                                            hoverBorderColor: 'rgba(129, 60, 25,1)',
                                            hoverOffset: 4,
                                            data: [
                                                { x: 'AlexNet', y: 94.5 },
                                                { x: 'ResNet', y: 96.4 },
                                                { x: 'DenseNet', y: 98 },
                                                { x: 'SqueezeNet', y: 96.1 },
                                                { x: 'Transfer Learning', y: 98 },
                                                { x: 'CNN (Our Model)', y: 92.9 },
                                            ]
                                        },
                                    ],
                                }}
                                    options={{
                                        maintainAspectRatio: true,
                                        plugins: {
                                            legend: {
                                                display: true,
                                                labels: {
                                                    color: 'rgba(129, 60, 25, 0.7)',
                                                    font: {
                                                        size: 15
                                                    }
                                                }
                                            },
                                            title: {
                                                display: true,
                                                text: 'Pneumonia Detection',
                                                font: {
                                                    size: 20
                                                }
                                            }
                                        },
                                        scales: {
                                            x: {
                                                title: {
                                                    display: true,
                                                    text: 'Models',
                                                    color: 'rgba(129, 60, 25, 1)',
                                                    font: {
                                                        size: 15
                                                    }
                                                }
                                            },
                                            y: {
                                                suggestedMin: 0,
                                                suggestedMax: 100,
                                                title: {
                                                    display: true,
                                                    text: 'Accuracies',
                                                    color: 'rgba(129, 60, 25, 1)',
                                                    font: {
                                                        size: 15
                                                    }
                                                }
                                            }
                                        }
                                    }} />
                            </IonCard>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Charts_;
