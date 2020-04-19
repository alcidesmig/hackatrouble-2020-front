import React from 'react'
import Logo from '../assets/logo.png'
import {
  IonPage, IonContent, IonInput, IonLabel, IonItem, IonHeader,
  IonToolbar, IonButtons, IonBackButton, IonButton
} from '@ionic/react'
import { withRouter, RouteComponentProps } from 'react-router'

class EstabelecimentoLogin extends React.Component<RouteComponentProps> {
  state = { cnpj: '', password: '' }

  render() {

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Logo} alt="Fila virtual" width={64} height={64} style={{ borderRadius: 16 }} />
            <span style={{ color: 'var(--ion-color-medium)', fontSize: 14, marginTop: 8 }}>Fila Digital</span>
            <div style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <IonItem>
                <IonLabel position="floating">CNPJ</IonLabel>
                <IonInput name="cnpj" value={this.state.cnpj} onIonChange={event => this.setState({ cnpj: event.detail.value })}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Senha</IonLabel>
                <IonInput name="password" value={this.state.password} onIonChange={event => this.setState({ password: event.detail.value })}></IonInput>
              </IonItem>

              <div style={{ width: '100%', paddingLeft: 16, paddingTop: 16 }}>
                <IonButton onClick={() => this.props.history.push('/estabelecimentos')} style={{ marginBottom: 16, width: '100%' }} fill="solid" expand="block">Login</IonButton>
                <IonButton onClick={() => this.props.history.push('/estabelecimentos/cadastro')} style={{ marginBottom: 16, width: '100%' }} fill="solid" expand="block">Registrar</IonButton>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage >
    )
  }
}


export default withRouter(EstabelecimentoLogin)