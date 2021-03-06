import React from 'react'
import Logo from '../assets/logo.png'
import {
  IonPage, IonContent, IonInput, IonLabel, IonItem, IonHeader,
  IonToolbar, IonButtons, IonBackButton, IonButton
} from '@ionic/react'
import { withRouter, RouteComponentProps } from 'react-router'

const style = { color: 'gray' }

class ClienteLogin extends React.Component<RouteComponentProps> {
  state = { cpf: '', password: '' }

  render() {

    return (
      <IonPage>
        <IonHeader className="ion-no-border">
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
                <IonLabel position="floating" style={style}>CPF</IonLabel>
                <IonInput name="cpf" value={this.state.cpf} onIonChange={event => this.setState({ cpf: event.detail.value })}></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating" style={style}>Senha</IonLabel>
                <IonInput name="password" value={this.state.password} onIonChange={event => this.setState({ password: event.detail.value })}></IonInput>
              </IonItem>

              <div style={{ width: '100%', paddingLeft: 16, paddingTop: 16 }}>
                <IonButton onClick={() => this.props.history.push('/clientes')} style={{ marginBottom: 16, width: '100%' }} fill="solid" expand="block">Login</IonButton>
                <IonButton onClick={() => this.props.history.push('/clientes/cadastro')} style={{ marginBottom: 16, width: '100%' }} fill="solid" expand="block">Registrar</IonButton>
              </div>
            </div>
          </div>
        </IonContent>
      </IonPage >
    )
  }
}


export default withRouter(ClienteLogin)