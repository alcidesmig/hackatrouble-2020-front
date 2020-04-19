import React from 'react'
import Logo from '../assets/logo.png'
import { IonPage, IonContent, IonButton } from '@ionic/react'
import { withRouter, RouteComponentProps } from 'react-router'

class Login extends React.Component<RouteComponentProps>  {
  render() {
    return (
      <IonPage>
        <IonContent>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Logo} alt="Fila virtual" width={64} height={64} style={{ borderRadius: 16 }} />
            <span style={{ color: 'var(--ion-color-medium)', fontSize: 14, marginTop: 8 }}>Fila Digital</span>
            <div style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#444444', fontSize: 21 }}>Entrar como:</span>
              <div style={{ padding: 8, width: '100%' }}>
                <IonButton onClick={() => this.props.history.push('/clientes/entrar')} style={{ marginBottom: 16 }} fill="solid" expand="block">Clientes</IonButton>
                <IonButton fill="solid" expand="block">Estabelecimento</IonButton>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    )
  }
}


export default withRouter(Login)