import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButtons, IonBackButton, IonModal, IonButton, IonImg } from '@ionic/react';
import { decorationIdeas } from '../data/decorations';

const Tab2: React.FC = () => {
  const [selectedDecoration, setSelectedDecoration] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openDecoration = (decoration: any) => {
    setSelectedDecoration(decoration);
    setShowModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/WelcomeScreen" />
          </IonButtons>
          <IonTitle>Decoration Ideas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {decorationIdeas.map((decoration, index) => (
            <IonItem key={index} button onClick={() => openDecoration(decoration)}>
              {decoration.name}
            </IonItem>
          ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>{selectedDecoration?.name}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonImg src={selectedDecoration?.image} alt={selectedDecoration?.name} />
            <h2>Details</h2>
            <p>{selectedDecoration?.details}</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
