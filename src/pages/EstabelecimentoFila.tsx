import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonLabel, IonModal, IonIcon, IonItem, IonInput} from '@ionic/react'
import { withRouter, RouteComponentProps } from 'react-router';

const style={color: 'gray'}

export interface CriarFilaInterface extends RouteComponentProps<{
    id: string
  }> {}

class EstabelecimentoFila extends React.Component<CriarFilaInterface> {
    state = {showModal: false};
    render() {
        const {id} = this.props.match.params
        return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar>
                <IonTitle style={style}>Fila {id}</IonTitle>
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
                        <IonModal 
                            swipeToClose={true} 
                            isOpen={this.state.showModal}
                            onDidDismiss={() => this.setState({showModal: false})}>
                            <IonHeader>
                            <IonToolbar>
                                <IonTitle style={style}>Inserir cliente</IonTitle>
                                <IonButton slot="end" onClick={() => this.setState({showModal: false})}>
                                    <IonIcon slot="icon-only" icon="close" />
                                </IonButton>
                                </IonToolbar>
                            </IonHeader>
                            <IonContent style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <form style={{ display: 'flex', flexDirection: 'column', margin: 20, marginTop: 30}}>
                                    <IonItem>
                                        <IonLabel position="floating" style={style}>Nome do cliente</IonLabel>
                                        <IonInput required/>
                                    </IonItem>
                                    <IonItem>
                                        <IonLabel position="floating" style={style}>CPF do cliente</IonLabel>
                                        <IonInput required/>
                                    </IonItem>
                                    <IonButton fill="solid" expand="block" style={{ marginTop: 40 }}>Inserir cliente</IonButton>
                                    <IonButton fill="outline" onClick={() => this.setState({showModal: false})}>Cancelar</IonButton>
                                </form>
                            </IonContent>
                        </IonModal>
                        <IonButton fill="solid" color="success"expand="block" style={{ marginTop: 40}}>Cliente entrou</IonButton>
                        <IonButton fill="solid" color="danger" expand="block">Cliente faltante</IonButton>
                        <IonButton fill="solid" color="secondary" expand="block" onClick={() => this.setState({showModal: true})}>Inserir cliente</IonButton>
                        <IonButton fill="outline" style={{colorHover: "secondary"}}>Encerrar fila</IonButton>
                    </div>
                </div>
            </div>
            </IonContent>
        </IonPage>
        )
    }
}

export default withRouter(EstabelecimentoFila)