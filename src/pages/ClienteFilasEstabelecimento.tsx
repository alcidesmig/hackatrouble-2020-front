import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonLabel, IonList, IonItem, IonNote, IonSearchbar, IonSegment, IonSegmentButton, IonModal, IonIcon, IonInput } from '@ionic/react'
import { withRouter, RouteComponentProps } from 'react-router';

const style = { color: 'gray' }

export interface CriarFilaInterface extends RouteComponentProps<{
    id: string
}> { }

class ClienteFilasEstabelecimento extends React.Component<CriarFilaInterface> {
    state = {
        'filas': [{ 'id': '1', 'nome': 'Fila 1', 'distancia': '25min' },
        { 'id': '2', 'nome': 'Fila 2', 'distancia': '50min' }],

        'filas_filtradas': [{ 'id': '1', 'nome': 'Fila 1', 'distancia': '25min' },
        { 'id': '2', 'nome': 'Fila 2', 'distancia': '50min' }],

        'campo_busca': '',
        'showModal': false,
        'esta_na_fila': false,
        'id_fila_escolhida': 1
    }

    filterList(filas: any[], busca: string) {
        const filtrado = filas.filter(
            item =>
                item.nome
                    .toUpperCase()
                    .indexOf(busca.toUpperCase()) > -1
        ).sort((a, b) => a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()))
        return filtrado
    }

    render() {
        const { id } = this.props.match.params
        return (


            <IonPage><IonHeader className="ion-no-border">
                <IonToolbar color="secondary">
                    <IonTitle style={{ color: 'white' }}>Estabelecimento {id}</IonTitle>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/" />
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
                <IonContent>
                    <IonToolbar no-border-top color="secondary">

                        <IonSearchbar value={this.state.campo_busca} class="ion-margin-top" placeholder="Procurar fila"
                            onIonChange={(e) => this.setState({ 'filas_filtradas': this.filterList(this.state.filas, e.detail.value!), 'campo_busca': e.detail.value! })}  >
                        </IonSearchbar>

                    </IonToolbar>


                    <IonModal
                        swipeToClose={true}
                        isOpen={this.state.showModal}
                        onDidDismiss={() => this.setState({ showModal: false })}>
                        <IonHeader>
                            <IonToolbar>
                                <IonTitle style={style}>Estabelecimento {id}</IonTitle>

                                <IonButton slot="end" onClick={() => this.setState({ showModal: false })}>
                                    <IonIcon slot="icon-only" icon="close" />
                                </IonButton>
                            </IonToolbar>
                        </IonHeader>
                        <IonContent style={{ padding: 32, width: '100%', maxWidth: 768, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                            <br /><br />
                            <IonTitle style={style}>Fila {this.state.id_fila_escolhida} </IonTitle>
                            <div style={{ display: 'flex', flexDirection: 'column', margin: 40, justifyContent: 'center' }}>

                                <div style={{ color: 'gray' }}>
                                    <IonLabel>Pessoas na sua frente:</IonLabel>
                                    <IonLabel>3</IonLabel>
                                </div><br />
                                <div style={{ color: 'gray', marginTop: 15 }}>
                                    <IonLabel>Tempo estimado de espera: </IonLabel>
                                    <IonLabel>45 min</IonLabel>
                                </div><br />
                                <div style={{ color: 'gray', marginTop: 15 }}>
                                    <IonLabel>Descrição: </IonLabel>
                                    <IonLabel>Aqui fica a descrição, explique sobre a fila aqui</IonLabel>
                                </div> <br /><br /><br />
                                {this.state.esta_na_fila ?
                                    (<IonButton fill='solid' color='danger' onClick={() => this.setState({ esta_na_fila: false })}>Sair da Fila</IonButton>) :
                                    (<IonButton fill='solid' color='secondary' onClick={() => this.setState({ esta_na_fila: true })}>Entrar na Fila</IonButton>)
                                }
                            </div>

                        </IonContent>
                    </IonModal>


                    <IonList>
                        {this.state.filas_filtradas.map(f => {
                            return (
                                <IonItem button onClick={() => this.setState({ showModal: true, id_fila_escolhida: f.id })} color="">
                                    <IonLabel style={{ color: '#353839 ' }}>{f.nome}</IonLabel>
                                    <IonNote slot="end" style={{ fontSize: 13 }}>{f.distancia}</IonNote>
                                </IonItem>
                            )
                        })}
                    </IonList>


                </IonContent>
            </IonPage >
        )
    }
}

export default withRouter(ClienteFilasEstabelecimento)