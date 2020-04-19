import React from 'react';
import { IonPage, IonContent, IonButton, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonLabel, IonList, IonItem, IonNote, IonSearchbar, IonSegment, IonSegmentButton } from '@ionic/react'
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

                    <IonList>
                        {this.state.filas_filtradas.map(f => {
                            return (
                                <IonItem button onClick={() => { }} color="">
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