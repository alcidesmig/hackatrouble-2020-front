import React from 'react'
import { IonPage, IonContent, IonLabel, IonSegment, IonSegmentButton, IonList, IonItem, IonNote, IonFab, IonFabButton, IonIcon, IonToolbar, IonSearchbar, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react'
import { logOut, logoUsd, medkit, cart, businessOutline } from 'ionicons/icons';
import API from '../services/api';


const style = { textAlign: 'center', alignItems: 'center', marginLeft: '15px', marginRight: '15px' }

const OutrosLocais = ({ locais, selectedItem, onSelectCategory }: { selectedItem: string, onSelectCategory: (category: string) => null | void, locais: { id: string, nome: string, categoria: string, distancia: string }[] }) => (

    <div>
        <IonGrid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IonRow>
                <IonCol onClick={() => onSelectCategory('Banco')} >
                    <IonButton shape="round" {...(selectedItem === 'Banco' ? { color: "tertiary" } : { color: "primary" })} style={{ width: '90px', height: '90px', marginLeft: '10px', marginRight: '10px' }}>
                        <IonIcon icon={logoUsd} style={{ width: '60px', height: '60px' }} />
                    </IonButton>
                </IonCol>
                <IonCol onClick={() => onSelectCategory('Atendimentos Municipais')}>
                    <IonButton shape="round" style={{ width: '90px', height: '90px', marginLeft: '10px', marginRight: '10px' }}  {...(selectedItem === 'Atendimentos Municipais' ? { color: "tertiary" } : { color: "primary" })}>
                        <IonIcon icon={businessOutline} style={{ width: '60px', height: '60px' }} />
                    </IonButton>
                </IonCol>
                <IonCol onClick={() => onSelectCategory('Farmácia')}>
                    <IonButton shape="round" style={{ width: '90px', height: '90px', marginLeft: '10px', marginRight: '10px' }}  {...(selectedItem === 'Farmácia' ? { color: "tertiary" } : { color: "primary" })}>
                        <IonIcon icon={medkit} style={{ width: '60px', height: '60px' }} />
                    </IonButton>
                </IonCol>
                <IonCol onClick={() => onSelectCategory('Mercados')}>
                    <IonButton shape="round" style={{ width: '90px', height: '90px', marginLeft: '10px', marginRight: '10px' }}  {...(selectedItem === 'Mercados' ? { color: "tertiary" } : { color: "primary" })}>
                        <IonIcon icon={cart} style={{ width: '60px', height: '60px' }} />
                    </IonButton>
                </IonCol>
            </IonRow>

            <IonRow>
                <IonCol style={style}>
                    <IonLabel style={{ color: '#353839 ', fontSize: 14 }}>{"Banco"}</IonLabel>
                </IonCol>
                <IonCol style={style}>
                    <IonLabel style={{ color: '#353839 ', fontSize: 14 }}>{"Atendimentos Municipais"}</IonLabel>
                </IonCol>
                <IonCol style={style}>
                    <IonLabel style={{ color: '#353839 ', fontSize: 14 }}>{"Farmácia"}</IonLabel>
                </IonCol>
                <IonCol style={style}>
                    <IonLabel style={{ color: '#353839 ', fontSize: 14 }}>{"Mercados"}</IonLabel>
                </IonCol>
            </IonRow>

        </IonGrid>


        <IonList>
            {locais.map((l, index) => {
                return (
                    <IonItem key={index} button routerLink={`/cliente/estabelecimento/${l.id}`} >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <IonLabel style={{ color: '#353839 ' }}>{l.nome}</IonLabel>
                            <IonLabel style={{ fontSize: 13, color: 'gray' }}>{l.categoria}</IonLabel>
                        </div>
                        <IonNote slot="end" style={{ fontSize: 13 }}>{l.distancia}</IonNote>
                    </IonItem>
                )
            })}
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary" routerLink="/" >
                <IonIcon icon={logOut} />
            </IonFabButton>
        </IonFab>
    </div >
)


const MinhasFilas = ({ filas }: { filas: { id: number, estabelecimento: string, nome: string, tempo_espera_atual: string }[] }) => (
    <div>
        <IonList>
            {filas.map(f => {
                return (
                    <IonItem button key={f.id} onClick={() => { }} color="">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <IonLabel style={{ color: '#353839 ' }}>{f.nome}</IonLabel>
                            <IonLabel style={{ fontSize: 13, color: 'gray' }}>{f.estabelecimento}</IonLabel>
                        </div>
                        <IonNote slot="end" style={{ fontSize: 13 }}>{f.tempo_espera_atual}</IonNote>
                    </IonItem>
                )
            })}

        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton color="secondary" routerLink="/" >
                <IonIcon icon={logOut} />
            </IonFabButton>
        </IonFab>
    </div>
)

class ClienteHome extends React.Component {
    state = {
        'type_segment': '1',
        'campo_busca': '',
        'categoria_selecinada': '',

        'filas': [{ 'id': '1', 'nome_estabelecimento': 'Estabelecimento 1', 'nome': 'Fila 1', 'distancia': '25min' },
        { 'id': '2', 'nome_estabelecimento': 'Estabelecimento 1', 'nome': 'Fila 2', 'distancia': '50min' }],

        'filas_filtradas': [],

        'locais': [
            { 'id': 1, 'nome': 'Estabelecimento 1', 'categoria': 'Banco', 'distancia': '2km' },
            { 'id': 2, 'nome': 'Estabelecimento 2', 'categoria': 'Banco', 'distancia': '17km' },
            { 'id': 3, 'nome': 'Estabelecimento 1', 'categoria': 'Banco', 'distancia': '2km' },
            { 'id': 4, 'nome': 'Estabelecimento 1', 'categoria': 'Atendimentos Municipais', 'distancia': '2km' },
            { 'id': 5, 'nome': 'Estabelecimento 2', 'categoria': 'Atendimentos Municipais', 'distancia': '2km' },
            { 'id': 6, 'nome': 'Estabelecimento 3', 'categoria': 'Atendimentos Municipais', 'distancia': '2km' }

        ],

        'locais_filtrados': []

    }

    filterFilas() {
        const { campo_busca } = this.state


        const filtrado = !campo_busca ? this.state.filas : this.state.filas.filter(
            item =>
                item.nome
                    .toUpperCase()
                    .indexOf(campo_busca.toUpperCase()) > -1
        )

        filtrado.sort((a, b) => a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()))

        this.setState({ filas_filtradas: filtrado })
    }

    filterLocais() {
        const { campo_busca, categoria_selecinada } = this.state

        let filtrado = !campo_busca ? this.state.locais : this.state.locais.filter(
            item =>
                item.nome
                    .toUpperCase()
                    .indexOf(campo_busca.toUpperCase()) > -1
        )

        filtrado = !categoria_selecinada ? filtrado : filtrado.filter(
            item =>
                item.categoria
                    .toUpperCase()
                    .indexOf(categoria_selecinada.toUpperCase()) > -1
        )

        filtrado.sort((a, b) => a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()))

        this.setState({ locais_filtrados: filtrado })
    }

    filterLocationsByCategory(categoriaBuscada: string) {
        const filtrado = this.state.locais.filter(
            item =>
                item.categoria
                    .toUpperCase()
                    .indexOf(categoriaBuscada.toUpperCase()) > -1
        ).sort((a, b) => a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()))

        this.setState({ locais_filtrados: filtrado })
    }

    componentDidUpdate(prevProps: any, prevState: any) {
        if (prevState.categoria_selecinada !== this.state.categoria_selecinada || prevState.campo_busca !== this.state.campo_busca || prevState.type_segment !== this.state.type_segment) {
            if (this.state.type_segment === '1') {
                this.filterLocais()
            } else {
                this.filterFilas()
            }
        }
    }

    componentDidMount() {
        API.cliente.listarFilas().then(({ data }) => {
            this.setState({ filas: data.filas, filas_filtradas: data.filas })
        })
        if (this.state.type_segment === '1') {
            this.filterLocais()
        } else {
            this.filterFilas()
        }
    }


    render() {
        return (
            <IonPage>
                <IonContent>
                    <IonToolbar no-border-top color="secondary">

                        <IonSearchbar value={this.state.campo_busca} class="ion-margin-top" placeholder={this.state.type_segment === '2' ? "Procurar fila" : "Procurar estabelecimento"}
                            onIonChange={(e) => this.state.type_segment === '2' ?
                                this.setState({ 'campo_busca': e.detail.value! }) :
                                this.setState({ 'campo_busca': e.detail.value! })}  >
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

                    {this.state.type_segment === '1' && <OutrosLocais selectedItem={this.state.categoria_selecinada} locais={this.state.locais_filtrados} onSelectCategory={category => this.setState({ categoria_selecinada: this.state.categoria_selecinada === category ? '' : category })} />}
                    {this.state.type_segment === '2' && <MinhasFilas filas={this.state.filas_filtradas} />}

                </IonContent>
            </IonPage >
        )
    }
}




export default ClienteHome
