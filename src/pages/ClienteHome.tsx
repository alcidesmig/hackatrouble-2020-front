import React, { createRef, useState } from 'react'
import { IonPage, IonContent, IonLabel, IonSegment, IonSegmentButton, IonList, IonItem, IonNote, IonFab, IonFabButton, IonIcon, IonToolbar, IonSearchbar, IonToggle, IonCheckbox, IonButton } from '@ionic/react'
import { add, logOut, logoUsd } from 'ionicons/icons';



const OutrosLocais = ({ locais }: { locais: { nome: string, categoria: string, distancia: string }[] }) => (
    <div>
        <IonButton shape="round" fill="outline"><IonIcon icon={logoUsd} /></IonButton>
        <IonButton shape="round" fill="outline"><IonIcon icon={logoUsd} /></IonButton>
        <IonButton shape="round" fill="outline"><IonIcon icon={logoUsd} /></IonButton>
        <IonButton shape="round" fill="outline"><IonIcon icon={logoUsd} /></IonButton>
        <IonButton shape="round" fill="outline"><IonIcon icon={logoUsd} /></IonButton>
        <IonButton shape="round" fill="outline"><IonIcon icon={logoUsd} /></IonButton>

        <IonList>
            {locais.map(l => {
                return (
                    <IonItem button onClick={() => { }} color="">
                        <IonLabel>{l.nome}</IonLabel>
                        <IonLabel position="stacked">{l.categoria}</IonLabel>
                        <IonNote slot="end">{l.distancia}</IonNote>
                    </IonItem>
                )
            })}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary">
                <IonIcon icon={logOut} />
            </IonFabButton>
        </IonFab>
    </div>
)


// ARRUMAR POSICAO DO NOME DA FILA

const MinhasFilas = ({ filas }: { filas: { nome_estabelecimento: string, nome: string, distancia: string }[] }) => (
    <div>
        <IonList>
            {filas.map(f => {
                return (
                    <IonItem button onClick={() => { }} color="">
                        <IonLabel>{f.nome}</IonLabel>
                        <IonLabel position="stacked">{f.nome_estabelecimento}</IonLabel>
                        <IonNote slot="end">{f.distancia}</IonNote>
                    </IonItem>
                )
            })}

        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary">
                <IonIcon icon={logOut} />
            </IonFabButton>
        </IonFab>
    </div>
)

class ClienteHome extends React.Component {
    state = {
        'type_segment': '1',
        'campo_busca': '',

        'filas': [{ 'nome_estabelecimento': 'Estabelecimento 1', 'nome': 'Fila 1', 'distancia': '25min' },
        { 'nome_estabelecimento': 'Estabelecimento 1', 'nome': 'Fila 2', 'distancia': '50min' }],

        'filas_filtradas': [{ 'nome_estabelecimento': 'Estabelecimento 1', 'nome': 'Fila 1', 'distancia': '25min' },
        { 'nome_estabelecimento': 'Estabelecimento 1', 'nome': 'Fila 2', 'distancia': '50min' }],

        'locais': [{ 'nome': 'Estabelecimento 1', 'categoria': 'Banco', 'distancia': '2km' },
        { 'nome': 'Estabelecimento 2', 'categoria': 'Banco', 'distancia': '17km' }],

        'locais_filtrados': [{ 'nome': 'Estabelecimento 1', 'categoria': 'Banco', 'distancia': '2km' },
        { 'nome': 'Estabelecimento 2', 'categoria': 'Banco', 'distancia': '17km' }]

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

        return (
            <IonPage>
                <IonContent>
                    <IonToolbar no-border-top color="secondary">

                        <IonSearchbar value={this.state.campo_busca} class="ion-margin-top" placeholder={this.state.type_segment === '2' ? "Procurar fila" : "Procurar estabelecimento"}
                            onIonChange={(e) => this.state.type_segment === '2' ?
                                this.setState({ 'filas_filtradas': this.filterList(this.state.filas, e.detail.value!), 'campo_busca': e.detail.value! }) :
                                this.setState({ 'locais_filtrados': this.filterList(this.state.locais, e.detail.value!), 'campo_busca': e.detail.value! })}  >
                        </IonSearchbar>

                        <IonSegment onIonChange={(e) => this.setState({ type_segment: e.detail.value, campo_busca: '' })} color="light">
                            <IonSegmentButton value='1'>
                                <IonLabel>Locais</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value='2'>
                                <IonLabel>Minhas Filas</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>

                    {this.state.type_segment === '1' && <OutrosLocais locais={this.state.locais_filtrados} />}
                    {this.state.type_segment === '2' && <MinhasFilas filas={this.state.filas_filtradas} />}

                </IonContent>
            </IonPage >
        )
    }
}




export default ClienteHome
