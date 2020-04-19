import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButtons, IonBackButton, IonDatetime } from '@ionic/react'
import Logo from '../assets/logo.png'

const style={color: 'gray'}

class EstabelecimentoCadastro extends React.Component {
    state = {categoria: "", horarioAbertura: "", horarioFechamento: ""};

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
            <div style={{ marginTop: 30, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img src={Logo} alt="Fila virtual" width={64} height={64} style={{ borderRadius: 16 }} />
            <span style={{ color: 'var(--ion-color-medium)', fontSize: 14, marginTop: 8 }}>Fila Digital</span>
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
                        <IonLabel position="floating" style={style}>Horário de abertura</IonLabel>
                        <IonDatetime displayFormat="DD/MM/YYYY HH:mm" value={this.state.horarioAbertura} onIonChange={e => this.setState({horarioAbertura: e.detail.value!})}/>
                    </IonItem>
                    <IonItem style={{marginTop: 5}} >
                        <IonLabel position="floating" style={style}>Horário de fechamento</IonLabel>
                        <IonDatetime displayFormat="DD/MM/YYYY HH:mm" value={this.state.horarioFechamento} onIonChange={e => this.setState({horarioFechamento: e.detail.value!})}/>
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