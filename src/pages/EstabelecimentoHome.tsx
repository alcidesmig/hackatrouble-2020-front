import React from 'react'
import { IonPage, IonContent, IonLabel, IonSegment, IonSegmentButton, IonList, IonItem, IonNote, IonFab, IonFabButton, IonIcon, IonToolbar, IonSearchbar } from '@ionic/react'
import { add } from 'ionicons/icons';

const MinhasFilas = ({ filas }: { filas: { id: string, nome: string, tempo_espera: string }[] }) => (
    <div>
        <IonList>
            {filas.map((f, index) => {
                return (
                    <IonItem key={index} button routerLink={`/estabelecimentos/fila/${f.id}`} >
                        <IonLabel style={{color:'#353839'}}>{f.nome}</IonLabel>
                        <IonNote slot="end" style={{fontSize: 13}}>{f.tempo_espera}</IonNote>
                    </IonItem>
                )
            })}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary" routerLink="/estabelecimentos/criar-fila" routerDirection="forward">
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
                        <IonLabel style={{color:'#353839'}}>{l.nome}</IonLabel>
                        <IonNote slot="end" style={{fontSize: 13}}>{l.tempo_espera}</IonNote>
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
        'filas': [{ 'id': '1', 'nome': 'Fila 1', 'tempo_espera': '1h30' },
        { 'id': '2', 'nome': 'Fila 2', 'tempo_espera': '40min' },
        { 'id': '3', 'nome': 'Fila 3', 'tempo_espera': '15min' },
        { 'id': '4', 'nome': 'Fila 4', 'tempo_espera': 'FECHADA' }],
        'filas_filtradas': [{ 'id': '1', 'nome': 'Fila 1', 'tempo_espera': '1h30' },
        { 'id': '2', 'nome': 'Fila 2', 'tempo_espera': '40min' },
        { 'id': '3', 'nome': 'Fila 3', 'tempo_espera': '15min' },
        { 'id': '4', 'nome': 'Fila 4', 'tempo_espera': 'FECHADA' }],
        'locais': [{ 'id': '1', 'nome': 'Estabelecimento 1', 'tempo_espera': '2h40' },
        { 'id': '2', 'nome': 'Estabelecimento 2', 'tempo_espera': '45min' }],
        'locais_filtrados': [{ 'nome': 'Estabelecimento 1', 'tempo_espera': '2h40' },
        { 'id': '3', 'nome': 'Estabelecimento 2', 'tempo_espera': '45min' }]
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
