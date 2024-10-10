import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonButtons, IonBackButton, IonModal, IonButton } from '@ionic/react';
import { recipes } from '../data/recipes';

const Tab1: React.FC = () => {
  const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openRecipe = (recipe: any) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/WelcomeScreen" />
          </IonButtons>
          <IonTitle>Cake Recipes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          {recipes.map((recipe, index) => (
            <IonItem key={index} button onClick={() => openRecipe(recipe)}>
              {recipe.name}
            </IonItem>
          ))}
        </IonList>

        <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>{selectedRecipe?.name}</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h2>Ingredients</h2>
            <ul>
              {selectedRecipe?.ingredients.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2>Instructions</h2>
            <p>{selectedRecipe?.instructions}</p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
