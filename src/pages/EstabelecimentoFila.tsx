import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonLabel} from '@ionic/react'
import { RouteComponentProps, withRouter } from 'react-router';

const style={color: 'gray'}

class CriarFila extends React.Component<RouteComponentProps> {
    state = {checked: true, horarioAbertura: "", horarioFechamento: "", tempo: ""};
    render() {
        return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                <IonTitle style={style}>Fila 1</IonTitle>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/"/>
                </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                        <div style={{color: 'gray'}}>
                            <IonLabel><u>Pessoas na sua fila: </u></IonLabel>
                            <IonLabel>3</IonLabel>
                        </div>
                        <div style={{color: 'gray', marginTop: 15}}>
                            <IonLabel>Tempo estimado de espera: </IonLabel>
                            <IonLabel>45 min</IonLabel>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', color: 'gray', marginTop: 15}}>
                            <IonLabel>Próximo da fila:</IonLabel>
                            <IonLabel style={{marginTop: 15}}>Nome: </IonLabel>
                            <IonLabel>CPF: </IonLabel>
                        </div>
                        <IonButton fill="solid" color="#70C254"expand="block" style={{ marginTop: 40, backgroundColor: '#70C254', borderRadius: 10}}>Cliente entrou</IonButton>
                        <IonButton fill="solid" color="#F05858" expand="block" style={{backgroundColor: '#F05858', borderRadius: 10}}>Cliente faltante</IonButton>
                        <IonButton fill="solid" color="#2DB7FF" expand="block" style={{backgroundColor: '#2DB7FF', borderRadius: 10}} >Inserir cliente</IonButton>
                        <IonButton fill="outline" style={{colorHover: "primary"}}>Encerrar fila</IonButton>
                    </div>
                </div>
            </div>
            </IonContent>
        </IonPage>
        )
    }
}

export default withRouter(CriarFila)