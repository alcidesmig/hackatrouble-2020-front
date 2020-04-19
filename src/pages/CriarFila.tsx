import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonItem, IonLabel, IonInput, IonButtons, IonBackButton, IonTitle, IonToggle, IonDatetime } from '@ionic/react'

const style={color: 'gray'}

class CriarFila extends React.Component {
    state = {checked: true, horarioAbertura: "", horarioFechamento: "", tempo: ""};
    render() {
        return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                <IonTitle style={style}>Criar Fila</IonTitle>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"/>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <form style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <IonItem>
                        <IonLabel position="floating" style={style}>Nome da fila</IonLabel>
                        <IonInput required/>
                    </IonItem>
                    <IonItem style={{marginTop: 5}} >
                        <IonLabel position="floating" style={style}>Tempo por pessoa</IonLabel>
                        <IonDatetime displayFormat="HH:mm" value={this.state.tempo} onIonChange={e => this.setState({tempo: e.detail.value!})}/>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="floating" style={style}>Descrição</IonLabel>
                        <IonInput required type="tel"/>
                    </IonItem>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
                        <IonToggle 
                            checked={this.state.checked} 
                            onIonChange={e => this.setState({checked: e.detail.checked})} 
                            style={{marginRight: 10}}
                        />
                        <IonLabel style={style}>Usar meu horário comercial</IonLabel>
                    </div>
                    {this.state.checked ? "" : (
                        <div>
                            <IonItem style={{marginTop: 5}} >
                                <IonLabel position="floating" style={style}>Horário de abertura</IonLabel>
                                <IonDatetime displayFormat="DD/MM/YYYY HH:mm" value={this.state.horarioAbertura} onIonChange={e => this.setState({horarioAbertura: e.detail.value!})}/>
                            </IonItem>
                            <IonItem style={{marginTop: 5}} >
                                <IonLabel position="floating" style={style}>Horário de fechamento</IonLabel>
                                <IonDatetime displayFormat="DD/MM/YYYY HH:mm" value={this.state.horarioFechamento} onIonChange={e => this.setState({horarioFechamento: e.detail.value!})}/>
                            </IonItem>
                        </div>
                    )}
                    <IonButton fill="solid" expand="block" style={{ marginTop: 40 }}>Finalizar</IonButton>
                    <IonButton fill="outline" routerLink="/estabelecimentos" routerDirection="forward">Cancelar</IonButton>
                </form>
                </div>
            </div>
            </IonContent>
        </IonPage>
        )
    }
}


export default CriarFila