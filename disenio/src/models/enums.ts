export interface EnumItem<E> { key: keyof E, value: E }

export function EnumToArray<E>(Enum: any): EnumItem<E>[] {
    return Object.keys(Enum).map(key => ({ key: key, value: Enum[key] } as EnumItem<E>))
}

export enum CajonTipo {
    Superpuesto = 'superpuesto',
    Encastrado = 'encastrado'
}

export enum CajonAperturaUbicacion {
    Superior = 'Superior',
    Inferior = 'Inferior',
    Derecha = 'Derecha',
    Izquierda = 'Izquierda',
    SuperiorIzquierda = 'Sup. Izq.',
    SuperiorCentral = 'Sup. Centro',
    SuperiorDerecha = 'Sup. Der.',
    InferiorIzquierda = 'Inf. Izq.',
    InferiorCentro = 'Inf. Centro',
    InferiorDerecha = 'Inf. Der.',
    Centro = 'Centro'
}

export enum ModuleLayout {
    Horizontal = 'horizontal',
    Vertical = 'vertical'
}

export enum ModuleLType {
    izquierdo = 'izquierdo',
    derecho = 'derecho'
}

export enum ElementType {
    barral = 'barral',
    cajon = 'cajon',
    separador = 'separador',
    puerta = 'puerta',
    puertaCustom = 'puerta-custom',
    puertaCorrediza = 'puerta-corrediza',
    fondo = 'fondo'
}

export enum HerrajeEnum {
    None = '',
    Isa32 = 'Isa 32',
    Isa64 = 'Isa 64',
    Isa96 = 'Isa 96',
    Isa128 = 'Isa 128',
    Isa160 = 'Isa 160',
    Isa192 = 'Isa 192',
    Isa224 = 'Isa 224',
    Isa256 = 'Isa 256',
    Isa288 = 'Isa 288',
    Isa320 = 'Isa 320',
    Lucida32 = 'Lucida 32',
    Lucida64 = 'Lucida 64',
    Lucida96 = 'Lucida 96',
    Lucida128 = 'Lucida 128',
    Lucida160 = 'Lucida 160',
    Lucida192 = 'Lucida 192',
    Lucida224 = 'Lucida 224',
    Lucida256 = 'Lucida 256',
    Lucida288 = 'Lucida 288',
    Lucida320 = 'Lucida 320',
    BarralTT32 = 'Barral TT 32',
    BarralTT64 = 'Barral TT 64',
    BarralTT96 = 'Barral TT 96',
    BarralTT128 = 'Barral TT 128',
    BarralTT160 = 'Barral TT 160',
    BarralTT192 = 'Barral TT 192',
    BarralTT224 = 'Barral TT 224',
    BarralTT256 = 'Barral TT 256',
    BarralTT288 = 'Barral TT 288',
    BarralTT320 = 'Barral TT 320',
    Espacio = 'Espacio',
    TiradorRedondo = 'Tirador Redondo',
    VidrioEsmerilado = 'Vidrio Esmerilado',
    VidrioColor = 'Vidrio Color',
    VidrioTraslucido = 'Vidrio Traslucido',
    Bis0 = 'Bis 0',
    Bis0Gas = 'Bis 0 Gas',
    Bis0Push = 'Bis 0 Push',
    Bis0Luz = 'Bis 0 Luz',
    Bis0GasLuz = 'Bis 0 Gas Luz',
    Bis0PushLuz = 'Bis 0 Push Luz',
    Bis9 = 'Bis 9 ',
    Bis9Gas = 'Bis 9 Gas',
    Bis9Push = 'Bis 9 Push',
    Bis9Luz = 'Bis 9Luz',
    Bis9GasLuz = 'Bis 9 Gas Luz',
    Bis9PushLuz = 'Bis 9 Push Luz',
    Bis17 = 'Bis 17',
    Bis17Gas = 'Bis 17 Gas',
    Bis17Push = 'Bis 17 Push',
    Bis17Luz = 'Bis 17Luz',
    Bis17GasLuz = 'Bis 17 Gas Luz',
    Bis180 = 'Bis 180',
    Bis90 = 'Bis 90',
    Bis45 = 'Bis 45',
    TiraDeLed = 'Tira de led',
    Fuente12V = 'Fuente 12V',
    Piston80N = 'Piston 80N',
    Piston100N = 'Piston 100N',
    Piston120N = 'Piston 120N',
    Piston160N = 'Piston 160N',
    BrazoGasderecho = 'Brazo Gas derecho',
    BrazoGasIzquierdo = 'Brazo Gas Izquierdo',
    PushPta = 'Push Pta',
    FrenoPta = 'Freno Pta',
    RielSuperior = 'riel superior',
    RielInferior = 'riel inferior',
    Manijon136 = 'Manijon 1 36',
    Manijon236 = 'Manijon 2 36',
    Manijon336 = 'Manijon 3 36',
    Manijon436 = 'Manijon 4 36',
    Manijon536 = 'Manijon 5 36',
    Manijon636 = 'Manijon 6 36',
    Manijon736 = 'Manijon 7 36',
    Manijon836 = 'Manijon 8 36',
    Manijon936 = 'Manijon 9 36',
    Manijon1036 = 'Manijon 10 36',
    Manijon1136 = 'Manijon 11 36',
    Manijon1236 = 'Manijon 12 36',
    Standar250 = 'Standar 250',
    Standar300 = 'Standar 300',
    Standar350 = 'Standar 350',
    Standar400 = 'Standar 400',
    Standar450 = 'Standar 450',
    Standar500 = 'Standar 500',
    Standar550 = 'Standar 550',
    Standar600 = 'Standar 600',
    Tele250 = 'Tele. 250',
    Tele300 = 'Tele. 300',
    Tele350 = 'Tele. 350',
    Tele400 = 'Tele. 400',
    Tele450 = 'Tele. 450',
    Tele500 = 'Tele. 500',
    Tele550 = 'Tele. 550',
    Tele600 = 'Tele. 600',
    Tele800 = 'Tele. 800',
    TeleCS250 = 'Tele C/S 250',
    TeleCS300 = 'Tele C/S 300',
    TeleCS350 = 'Tele C/S 350',
    TeleCS400 = 'Tele C/S 400',
    TeleCS450 = 'Tele C/S 450',
    TeleCS500 = 'Tele C/S 500',
    TeleCS550 = 'Tele C/S 550',
    TeleCS600 = 'Tele C/S 600',
    TelePush250 = 'Tele Push 250',
    TelePush300 = 'Tele Push 300',
    TelePush350 = 'Tele Push 350',
    TelePush400 = 'Tele Push 400',
    TelePush450 = 'Tele Push 450',
    TelePush500 = 'Tele Push 500',
    TelePush550 = 'Tele Push 550',
    TelePush600 = 'Tele Push 600',
    DCarm32 = 'D carm 32',
    DCarm64 = 'D carm 64',
    DCarm96 = 'D carm 96',
    DCarm128 = 'D carm 128',
    DCarm160 = 'D carm 160',
    DCarm192 = 'D carm 192',
    DCarm224 = 'D carm 224',
    DCarm256 = 'D carm 256',
    DCarm288 = 'D carm 288',
    DCarm320 = 'D carm 320'
}

export enum MaterialEnum {
    None = '',
    BlancoMDF = 'Blanco MDF',
    GrisGrafitoMDF = 'Gris Grafito MDF',
    RojoMDF = 'Rojo MDF',
    NegroMDF = 'Negro MDF',
    AluminioMDF = 'Aluminio MDF',
    GrisHumoMDF = 'Gris Humo MDF',
    CenizaMDF = 'Ceniza MDF',
    ArcillaMDF = 'Arcilla MDF',
    AlmendraMDF = 'Almendra MDF',
    WengueMDF = 'Wengue MDF',
    RobleMoroMDF = 'Roble Moro MDF',
    RobleInglesMDF = 'Roble Ingles MDF',
    NogalBrianzaMDF = 'Nogal Brianza MDF',
    TecaMDF = 'Teca MDF',
    GuindoMDF = 'Guindo MDF',
    CedroMDF = 'Cedro MDF',
    HayaMDF = 'Haya MDF',
    CerejeiraMDF = 'Cerejeira MDF',
    ConcretoMetropolitanMatMDF = 'Concreto Metropolitan Mat MDF',
    NebraskaMatMDF = 'Nebraska Mat MDF',
    TweedMatMDF = 'Tweed Mat MDF',
    LinoMatMDF = 'Lino Mat MDF',
    EnigmaEscMDF = 'Enigma Esc MDF',
    TecaLimoEscMDF = 'Teca Limo Esc MDF',
    RobleNaturalEscMDF = 'Roble Natural Esc MDF',
    RobleAmerianoEnchEscMDF = 'Roble Ameriano Ench Esc MDF',
    NogalHabanoEscMDF = 'Nogal Habano Esc MDF',
    WengueEnchEscMDF = 'Wengue Ench Esc MDF',
    FresnoAbedulEscMDF = 'Fresno Abedul Esc MDF',
    RobleBlancoEnchEsMDF = 'Roble Blanco Ench Es MDF',
    FresnoNegroEscMDF = 'Fresno Negro Esc MDF',
    MangoLacaMDF = 'Mango Laca MDF',
    CoñacLacaMDF = 'Coñac Laca MDF',
    EsmeraldaLacaMDF = 'Esmeralda Laca MDF',
    VisonLacaMDF = 'Vison Laca MDF',
    VerdeOlivaLacaMDF = 'Verde Oliva Laca MDF',
    BlancoLacaMDF = 'Blanco Laca MDF',
    AzulAceroLacaMDF = 'Azul Acero Laca MDF',
    OlmoAlpinoMDF = 'Olmo Alpino MDF',
    TecaTouchMDF = 'Teca Touch MDF',
    TecaItaliaTouchMDF = 'Teca Italia Touch MDF',
    KeniaTouchMDF = 'Kenia Touch MDF',
    SiberiaTouchMDF = 'Siberia Touch MDF',
    MalagaCherryTouchMDF = 'Malaga Cherry Touch MDF',
    ToledoTouchMDF = 'Toledo Touch MDF',
    RobleMoroTouchMDF = 'Roble Moro Touch MDF',
    LaricinaTouchMDF = 'Laricina Touch MDF',
    BlancoAGL = 'Blanco AGL',
    GrisGrafitoAGL = 'Gris Grafito AGL',
    RojoAGL = 'Rojo AGL',
    NegroAGL = 'Negro AGL',
    AluminioAGL = 'Aluminio AGL',
    GrisHumoAGL = 'Gris Humo AGL',
    CenizaAGL = 'Ceniza AGL',
    ArcillaAGL = 'Arcilla AGL',
    AlmendraAGL = 'Almendra AGL',
    WengueAGL = 'Wengue AGL',
    RobleMoroAGL = 'Roble Moro AGL',
    RobleInglesAGL = 'Roble Ingles AGL',
    NogalBrianzaAGL = 'Nogal Brianza AGL',
    TecaAGL = 'Teca AGL',
    GuindoAGL = 'Guindo AGL',
    CedroAGL = 'Cedro AGL',
    HayaAGL = 'Haya AGL',
    CerejeiraAGL = 'Cerejeira AGL',
    ConcretoMetropolitanMatAGL = 'Concreto Metropolitan Mat AGL',
    NebraskaMatAGL = 'Nebraska Mat AGL',
    TweedMatAGL = 'Tweed Mat AGL',
    LinoMatAGL = 'Lino Mat AGL',
    EnigmaEscAGL = 'Enigma Esc AGL',
    TecaLimoEscAGL = 'Teca Limo Esc AGL',
    RobleNaturalEscAGL = 'Roble Natural EscAGL',
    RobleAmerianoEnchEscAGL = 'Roble Ameriano Ench Esc AGL',
    NogalHabanoEscAGL = 'Nogal Habano Esc AGL',
    WengueEnchEscAGL = 'Wengue Ench Esc AGL',
    FresnoAbedulEscAGL = 'Fresno Abedul Esc AGL',
    RobleBlancoEnchEscAGL = 'Roble Blanco Ench Esc AGL',
    FresnoNegroEscAGL = 'Fresno Negro Esc AGL',
    MangoLacaAGL = 'Mango Laca AGL',
    CoñacLacaAGL = 'Coñac Laca AGL',
    EsmeraldaLacaAGL = 'Esmeralda Laca AGL',
    VisonLacaAGL = 'Vison Laca AGL',
    VerdeOlivaLacaAGL = 'Verde Oliva Laca AGL',
    BlancoLacaAGL = 'Blanco Laca AGL',
    AzulAceroLacaAGL = 'Azul Acero Laca AGL',
    OlmoAlpinoAGL = 'Olmo Alpino AGL',
    TecaTouchAGL = 'Teca Touch AGL',
    TecaItaliaTouchAGL = 'Teca Italia Touch AGL',
    KeniaTouchAGL = 'Kenia Touch AGL',
    SiberiaTouchAGL = 'Siberia Touch AGL',
    MalagaCherryTouchAGL = 'Malaga Cherry Touch AGL',
    ToledoTouchAGL = 'Toledo Touch AGL',
    RobleMoroTouchAGL = 'Roble Moro Touch AGL',
    LaricinaTouchAGL = 'Laricina Touch AGL',
    BlancoFibro3mm = 'Blanco Fibro 3mm',
    GrisGrafitoFibro3mm = 'Gris Grafito Fibro 3mm',
    RojoFibro3mm = 'Rojo Fibro 3mm',
    NegroFibro3mm = 'Negro Fibro 3mm',
    AluminioFibro3mm = 'Aluminio Fibro 3mm',
    GrisHumoFibro3mm = 'Gris Humo Fibro 3mm',
    CenizaFibro3mm = 'Ceniza Fibro 3mm',
    ArcillaFibro3mm = 'Arcilla Fibro 3mm',
    AlmendraFibro3mm = 'Almendra Fibro 3mm',
    WengueFibro3mm = 'Wengue Fibro 3mm',
    RobleMoroFibro3mm = 'Roble Moro Fibro 3mm',
    RobleInglesFibro3mm = 'Roble Ingles Fibro 3mm',
    NogalBrianzaFibro3mm = 'Nogal Brianza Fibro 3mm',
    TecaFibro3mm = 'Teca Fibro 3mm',
    GuindoFibro3mm = 'Guindo Fibro 3mm',
    CedroFibro3mm = 'Cedro Fibro 3mm',
    HayaFibro3mm = 'Haya Fibro 3mm',
    CerejeiraFibro3mm = 'Cerejeira Fibro 3mm',
    ConcretoMetropolitanMatFibro3mm = 'Concreto Metropolitan Mat Fibro 3mm',
    NebraskaMatFibro3mm = 'Nebraska Mat Fibro 3mm',
    TweedMatFibro3mm = 'Tweed Mat Fibro 3mm',
    LinoMatFibro3mm = 'Lino Mat Fibro 3mm',
    EnigmaEscFibro3mm = 'Enigma Esc Fibro 3mm',
    TecaLimoEscFibro3mm = 'Teca Limo Esc Fibro 3mm',
    RobleNaturalEscFibro3mm = 'Roble Natural Esc Fibro 3mm',
    RobleAmerianoEnchEscFibro3mm = 'Roble Ameriano Ench Esc Fibro 3mm',
    NogalHabanoEscFibro3mm = 'Nogal Habano Esc Fibro 3mm',
    WengueEnchEscFibro3mm = 'Wengue Ench Esc Fibro 3mm',
    FresnoAbedulEscFibro3mm = 'Fresno Abedul Esc Fibro 3mm',
    RobleBlancoEnchEsFibro3mm = 'Roble Blanco Ench Es Fibro 3mm',
    FresnoNegroEscFibro3mm = 'Fresno Negro Esc Fibro 3mm',
    MangoLacaFibro3mm = 'Mango Laca Fibro 3mm',
    CoñacLacaFibro3mm = 'Coñac Laca Fibro 3mm',
    EsmeraldaLacaFibro3mm = 'Esmeralda Laca Fibro 3mm',
    VisonLacaFibro3mm = 'Vison Laca Fibro 3mm',
    VerdeOlivaLacaFibro3mm = 'Verde Oliva Laca Fibro 3mm',
    BlancoLacaFibro3mm = 'Blanco Laca Fibro 3mm',
    AzulAceroLacaFibro3mm = 'Azul Acero Laca Fibro 3mm',
    OlmoAlpinoFibro3mm = 'Olmo Alpino Fibro 3mm',
    TecaTouchFibro3mm = 'Teca Touch Fibro 3mm',
    TecaItaliaTouchFibro3mm = 'Teca Italia Touch Fibro 3mm',
    KeniaTouchFibro3mm = 'Kenia Touch Fibro 3mm',
    SiberiaTouchFibro3mm = 'Siberia Touch Fibro 3mm',
    MalagaCherryTouchFibro3mm = 'Malaga Cherry Touch Fibro 3mm',
    ToledoTouchFibro3mm = 'Toledo Touch Fibro 3mm',
    RobleMoroTouchFibro3mm = 'Roble Moro Touch Fibro 3mm',
    LaricinaTouchFibro3mm = 'Laricina Touch Fibro 3mm',
    MDFCrudo6mm = 'MDFCrudo 6mm',
    MDFCrudo9mm = 'MDFCrudo 9mm',
    MDFCrudo12mm = 'MDFCrudo 12mm',
    MDFCrudo15mm = 'MDFCrudo 15mm',
    MDFCrudo18mm = 'MDFCrudo 18mm',
    MDFCrudo21mm = 'MDFCrudo 21mm',
    MDFCrudo25mm = 'MDFCrudo 25mm',
    MDFCrudo12mmVidrio = 'MDFCrudo 12mm + vidrio',
    MDFCrudo15mmVidrio = 'MDFCrudo 15mm + vidrio',
    MDFCrudo18mmVidrio = 'MDFCrudo 18mm + vidrio',
    MDFCrudo21mmVidrio = 'MDFCrudo 21mm + vidrio',
    MDFCrudo25mmVidrio = 'MDFCrudo 25mm + vidrio',
    MDFCrudo12mmEspejo = 'MDFCrudo 12mm + espejo',
    MDFCrudo15mmEspejo = 'MDFCrudo 15mm + espejo',
    MDFCrudo18mmEspejo = 'MDFCrudo 18mm + espejo',
    MDFCrudo21mmEspejo = 'MDFCrudo 21mm + espejo',
    Perfil2045 = 'Perfil 20-45-',
    PerfilVitro = 'Perfil Vitro-',
    Perfil3045Ancho = 'Perfil 30-45 Ancho-',
    PerfilLiviano = 'Perfil Liviano-',
    PerfilPesado = 'Perfil Pesado-',
    PerfilNano = 'Perfil Nano-',
    PerfilJ = 'Perfil J-',
    TapacantoU = 'Tapacanto U-',
    TapacantoPlano = 'Tapacanto Plano-',
    BarralCromado = 'barral cromado',
    BarralAluminio = 'barral aluminio',
    KIT2X2 = 'KIT 2X2-',
    KIT3x2 = 'KIT 3x2-',
    KIT3x3 = 'KIT 3x3-',
    ManijonKit = 'Manijon Kit',
    RielSup = 'Riel sup ',
    RielInf = 'Riel Inf',
    RamioPlataMDF = 'Ramio Plata MDF',
    RamioPlataAGL = 'Ramio Plata AGL'
}

export enum TapacantoEnum {
    No = '',
    Melamina = 'Melamina.',
    M36 = 'M36,',
    M2 = 'M2:',
    PerfilLiviano = 'Perfil Liviano-',
    PerfilPesado = 'Perfil Pesado-',
    PerfilJ = 'Perfil J-',
    PerfilNano = 'Perfil Nano-',
    TCU = 'T.C. U-',
    TCPlano = 'T.C. Plano-',
    Pvc = 'Pvc;',
    CorteL = 'Corte L [',
    Perfil2045 = 'Perfil  20-45-',
    PerfilVitro = 'Perfil Vitro-',
    PerfilAlunAncho = 'Perfil  alun Ancho-',
    KIT3X2 = 'KIT 3X2-',
    KIT2X2 = 'KIT 2X2-',
    KIT3X3 = 'KIT 3X3-',
    KIT2X3 = 'KIT 2X3-',
    Corte45 = 'Corte 45°{',
    PerfilL = 'Perfil L;'
}

export enum UbicacionBisagra {
    Inferior = 'Inferior',
    Superior = 'Superior',
    IzquierdaDerecha = 'Izquierda/Derecha',
    Izquierda = 'Izquierda',
    Derecha = 'Derecha'
}

export enum PuertaTipo {
    Entera = 'Entera',
    Dividida = 'Dividida'
}

export enum AperturaSistema {
    NoDefinido = 'No definido',
    Manija = 'Manija',
    Perfil35 = 'Perfil 35',
    Espacio25 = 'Espacio 25',
    Angulo = 'Angulo'
}

export enum ModulosExternosEnum {
    EstanteFlotante = 'Estante Flotante',
    Banquina = 'Banquina',
    MesaBajoMesada = 'Mesa Bajo Mesada',
    ListonLateralIzquierdo = 'Liston Lateral Izquierdo',
    ListonLateralDerecho = 'Liston Lateral Derecho',
    Frentin = 'Frentin',
    ListonPiso = 'Liston Piso',
    ListonTecho = 'Liston Techo'
}

export enum PiezasporModulosExternosEnum {
    Frente = 'Frente Banquina',
    ContraFrente = 'Ctra Frente Banquina',
    LateralIzquierdo = 'Lat Izq Banquina',
    LateralDerecho = 'Lat Der Banquina',
    Tapa = 'Tapa Mesa',
    Pata = 'Pata Mesa'
}

export enum TipoDeBaseEnum {
    Entera = 'Entera',
    Dividida = 'Dividida'
}

export enum EstanteFlotanteEnum {
    TapaAlta = 'Tapa Alta Estante',
    TapaMedia = 'Tapa Media Estante',
    TapaBaja = 'Tapa Baja Estante'
}

export enum EspesorEnum {
    Espesor18 = '18',
    Espesor36 = '36',
    Espesor54 = '54'
}

export enum VistaEnum {
    perspective = 'Perspectiva',
    front = 'Frontal',
    back = 'Posterior',
    left = 'Izquierda',
    right = 'Derecha',
    top = 'Superior',
    bottom = 'Inferior'
}

export enum ViewerStatesEnum {
    LOADING = -1,
    NORMAL = 0,
    MOVING_POINT = 1,
    MODEL_SELECTED = 2,
    PIECE_SELECTED = 3,
    DRAGGING = 4,
    ROTATING = 5,
    MEASURING = 6
}