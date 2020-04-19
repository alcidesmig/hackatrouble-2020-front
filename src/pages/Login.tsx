import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'

class Login extends React.Component {
  render() {
    return (
      <IonPage>
        <IonContent>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <strong>Entrar como:</strong>
              <div style={{ padding: 32, width: '100%' }}>
                <IonButton style={{ marginBottom: 16 }} fill="solid" expand="block">Clientes</IonButton>
                <IonButton fill="solid" expand="block">Estabelecimento</IonButton>
              </div>
            </div>
          </div>

        </IonContent>
      </IonPage>
    )
  }
}


export default Login