import React, { createRef, useState } from 'react'
import { IonPage, IonContent, IonLabel, IonSegment, IonSegmentButton, IonList, IonItem, IonNote, IonFab, IonFabButton, IonIcon, IonToolbar, IonSearchbar } from '@ionic/react'
import { add, list, map } from 'ionicons/icons';



const MinhasFilas = ({ filas }: { filas: { nome: string, tempo_espera: string }[] }) => (
    <div>
        <IonList>
            {filas.map(f => {
                return (
                    <IonItem button onClick={() => { }} color="">
                        <IonLabel>{f.nome}</IonLabel>
                        <IonNote slot="end">{f.tempo_espera}</IonNote>
                    </IonItem>
                )
            })}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary">
                <IonIcon icon={add} />
            </IonFabButton>
        </IonFab>
    </div>
)

const OutrosLocais = ({ locais }: { locais: { nome: string, tempo_espera: string }[] }) => (
    <div>
        <IonList>
            {locais.map(l => {
                return (
                    <IonItem button onClick={() => { }} color="">
                        <IonLabel>{l.nome}</IonLabel>
                        <IonNote slot="end">{l.tempo_espera}</IonNote>
                    </IonItem>
                )
            })}
        </IonList>
    </div>
)

class EstabelecimentoHome extends React.Component {
    state = {
        'type_segment': '1',
        'campo_busca': '',
        'filas': [{ 'nome': 'Fila 1', 'tempo_espera': '1h30' },
        { 'nome': 'Fila 2', 'tempo_espera': '40min' },
        { 'nome': 'Fila 3', 'tempo_espera': '15min' },
        { 'nome': 'Fila 4', 'tempo_espera': 'FECHADA' }],
        'filas_filtradas': [{ 'nome': 'Fila 1', 'tempo_espera': '1h30' },
        { 'nome': 'Fila 2', 'tempo_espera': '40min' },
        { 'nome': 'Fila 3', 'tempo_espera': '15min' },
        { 'nome': 'Fila 4', 'tempo_espera': 'FECHADA' }],
        'locais': [{ 'nome': 'Estabelecimento 1', 'tempo_espera': '2h40' },
        { 'nome': 'Estabelecimento 2', 'tempo_espera': '45min' }],
        'locais_filtrados': [{ 'nome': 'Estabelecimento 1', 'tempo_espera': '2h40' },
        { 'nome': 'Estabelecimento 2', 'tempo_espera': '45min' }]
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

                        <IonSearchbar value={this.state.campo_busca} class="ion-margin-top" placeholder={this.state.type_segment === '1' ? "Procurar fila" : "Procurar estabelecimento"}
                            onIonChange={(e) => this.state.type_segment === '1' ?
                                this.setState({ 'filas_filtradas': this.filterList(this.state.filas, e.detail.value!), 'campo_busca': e.detail.value! }) :
                                this.setState({ 'locais_filtrados': this.filterList(this.state.locais, e.detail.value!), 'campo_busca': e.detail.value! })}  >
                        </IonSearchbar>

                        <IonSegment onIonChange={(e) => this.setState({ type_segment: e.detail.value, campo_busca: '' })} color="light">
                            <IonSegmentButton value='1'>
                                <IonLabel>Minhas Filas</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value='2'>
                                <IonLabel>Outros Locais</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonToolbar>

                    {this.state.type_segment === '1' && <MinhasFilas filas={this.state.filas_filtradas} />}
                    {this.state.type_segment === '2' && <OutrosLocais locais={this.state.locais_filtrados} />}

                </IonContent>
            </IonPage >
        )
    }
}




export default EstabelecimentoHome
