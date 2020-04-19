import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButtons, IonBackButton, IonDatetime } from '@ionic/react'
import Logo from '../assets/logo.png'

const style={color: 'gray'}

class EstabelecimentoCadastro extends React.Component {
    state = {categoria: "", horario: ""};

    render() {
        return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"/>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div style={{ marginTop: 50, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={Logo} alt="Fila virtual" width={64} height={64} style={{ borderRadius: 16 }} />
                <div style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <form style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <IonItem>
                        <IonLabel position="floating" style={style}>Nome</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem style={{marginTop: 10}}>
                        <IonLabel style={style}>Categoria</IonLabel>
                        <IonSelect value={this.state.categoria} onIonChange={e => this.setState({categoria: e.detail.value})}>
                            <IonSelectOption value="teste">Teste</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                    <IonItem style={{marginTop: 5}} >
                        <IonLabel position="floating" style={style}>Horário de funcionamento</IonLabel>
                        <IonDatetime displayFormat="DD/MM/YYYY HH:mm" value={this.state.horario} onIonChange={e => this.setState({horario: e.detail.value!})}/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" style={style}>CNPJ</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" style={style}>CEP</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" style={style}>Endereço</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" style={style}>E-mail</IonLabel>
                        <IonInput required type="email"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" style={style}>Senha</IonLabel>
                        <IonInput required type="password"/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" style={style}>Confirmação de senha</IonLabel>
                        <IonInput required type="password"/>
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


export default EstabelecimentoCadastro