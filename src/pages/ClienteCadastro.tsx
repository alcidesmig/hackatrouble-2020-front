import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonTitle, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption } from '@ionic/react'
import Logo from '../assets/logo.png'

class ClienteCadastro extends React.Component {
    state = {genero: ""};

    render() {
        return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div style={{ marginTop: 50, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={Logo} alt="Fila virtual" width={64} height={64} style={{ borderRadius: 16 }} />
                <div style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <form style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <IonItem>
                        <IonLabel position="floating" >Nome completo</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">CPF</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Celular</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Data de nascimento</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Sexo</IonLabel>
                        <IonSelect value={this.state.genero} onIonChange={e => this.setState({genero: e.detail.value})}>
                            <IonSelectOption value="feminino">Feminino</IonSelectOption>
                            <IonSelectOption value="masculino">Masculino</IonSelectOption>
                            <IonSelectOption value="outro">Outro</IonSelectOption>
                            <IonSelectOption value="sem">Não quero me identificar</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">E-mail</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Senha</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating">Confirmação de senha</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonButton fill="solid" expand="block" style={{ marginTop: 40 }}>Registrar</IonButton>
                </form>
                </div>
            </div>
            </IonContent>
        </IonPage>
        )
    }
}


export default ClienteCadastro