import categoriasConst from "./categorias"

type listaJogostype = {
    nome: string
    urlJogo: string
    descricao: string
    categoria: string
    imagem: string
    empressa:string
}

const listaJogosConst: listaJogostype[] = [
    {
        nome: "The Elder Scrolls V: Skyrim Special Edition",
        empressa:"Bethesda Softworks",
        urlJogo: "https://www.xbox.com/pt-br/games/store/the-elder-scrolls-v-skyrim-special-edition/bq1w1t1fc14w",
        descricao: `Vencedor de mais de 200 prêmios de Jogo do Ano, The Elder Scrolls V: Skyrim Special Edition traz vida à fantasia épica com detalhes deslumbrantes. A Special Edition inclui o jogo aclamado pela crítica e seus complementos, com novos traços como: arte e efeitos remasterizados, iluminação melhorada, profundidade de campo dinâmica, reflexos em espaço de tela e mais.

        Skyrim Special Edition também traz o sistema de Criações da Bethesda Game Studios para consoles. Novas missões, ambientes, personagens, diálogos, armaduras, armas e mais. Com o sistema de Criações, não há limites para a sua experiência.
        
        UMA FANTASIA ÉPICA RENASCE
        Skyrim reimagina e revoluciona a fantasia épica de mundo aberto, trazendo à vida um mundo virtual completo e aberto à exploração da maneira que você preferir.
        
        VIVA OUTRA VIDA EM OUTRO MUNDO
        Jogue como qualquer personagem que possa imaginar e faça o que quiser; a lendária liberdade de escolha, narrativa e aventura de The Elder Scrolls como você nunca viu.
        
        VOCÊ É O QUE VOCÊ JOGA
        Escolha entre centenas de armas, feitiços e habilidades. O novo sistema de personagens permite que você jogue da maneira que quiser e se defina por meio de suas ações.
        
        ENFRENTE DRAGÕES
        Batalhe contra dragões antigos como você nunca viu. Como Dragonborn, descubra seus segredos e controle seus poderes.`,
        categoria: categoriasConst[4].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.64810.68326442227858632.03782b23-7f26-4a8e-ba87-177bdf2c3c90.fdefe49f-270c-44e5-b660-6d7764b37f0f?q=90&w=177&h=265"
    },
    {
        nome: "Red dead 2",
        empressa: "",
        urlJogo: "a",
        descricao: "a",
        categoria: categoriasConst[7].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.34695.13942869738016799.078aba97-2f28-440f-97b6-b852e1af307a.b278e12f-c22c-4a2a-bb18-dfd26ca6cafc?q=90&w=177&h=265"
    },
    {
        nome: "Fortnite",
        empressa:"",
        urlJogo: "a",
        descricao: "a",
        categoria: categoriasConst[1].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.61483.70702278257994163.1152c6f1-f586-40eb-a61e-0f8bad1ee621.dac35347-06f6-4003-88b5-931747a876cf?q=90&w=177&h=265"
    },
    {
        nome: "Age of Empires IV = estrategia",
        empressa:"",
        urlJogo: "a",
        descricao: "a",
        categoria: categoriasConst[0].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.63959.14235977975261210.106699ff-5046-4540-ac72-e248ae2c3818.f61be535-d1e6-46c7-a0b3-338fd9384f08?q=90&w=177&h=265"
    },
    {
        nome: "Rare Replay",
        empressa:"",
        urlJogo: "a",
        descricao: "a",
        categoria: categoriasConst[3].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.14606.65780799141015212.07b74564-f8a6-4ab1-b868-91169ad4faff.9416d5a7-9aa0-47ab-b85e-5f4ff6f6fa9d?q=90&w=177&h=265"
    },
    {
        nome: "Genesis Noir",
        empressa:"",
        urlJogo: "a",
        descricao: "a",
        categoria: categoriasConst[2].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.44029.14234812946294583.310a0a84-edb2-482c-a55c-b54922972168.f18bc892-cdc6-4b69-8651-c53bd52a2e54?q=90&w=177&h=265"
    },
    {
        nome: "Grand Theft Auto V",
        empressa:"",
        urlJogo: "a",
        descricao: "a",
        categoria: categoriasConst[6].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.32034.68565266983380288.0f5ef871-88c0-45f7-b108-6aacbc041fcf.9b094362-c51d-49e5-9e92-80710c585fca?q=90&w=177&h=265"
    },
    {
        nome: "Minecraft",
        empressa:"",
        urlJogo: "a",
        descricao: "a",
        categoria: categoriasConst[7].categoria,
        imagem: "https://store-images.s-microsoft.com/image/apps.17382.13850085746326678.a9b1e0db-29d0-40f3-a86c-2155353d053c.b8233937-28f5-4fdf-a696-6ef666a6ff6e?q=90&w=177&h=265"
    },

]
export default listaJogosConst