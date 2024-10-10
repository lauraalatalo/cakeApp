import React from 'react';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonList,
  IonItem,
  IonImg,
} from '@ionic/react';

const WelcomeScreen: React.FC = () => {
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar color={'primary'}>
            <IonTitle>CakeApp Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem button routerLink="/tabs/tab1">Cake Recipies</IonItem>
            <IonItem button routerLink="/tabs/tab2">Decoration Ideas</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar color={'primary'}>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>CakeApp</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <h1>Welcome to CakeApp!</h1>
          <p>Discover delightful cake recipes and stunning decoration ideas!</p>
          <IonImg 
            src="https://i.postimg.cc/tghBWkRP/DALL-E-2024-10-10-12-53-08-A-beautifully-decorated-cake-with-intricate-sugar-paste-decorations-De.webp" 
            alt="Beautifully decorated cake" 
            style={{ width: '100%', height: 'auto', marginTop: '20px' }}
          />
        </IonContent>
      </IonPage>
    </>
  );
};

export default WelcomeScreen;
