
interface IChar{
    id:number,
    name:string,
    mission?:string,
    purpose?:string,
    description:string,
    age:number,
}
//standar peng id an || umur,tahun mulai belajar
const RajaFrontEnd={
    id:2119, 
    name:'sugiono de la forest',
    age:21,
    description:'beliau adalah sugiono de la forest menjadi raja front end adalah tujuan hidupnya ,untuk mendapatkan gelar raja front end ia harus menelusuri dalamnya pulau stek over flow namun di tengah perjalanannya ia ditangkap oleh raja gideon atas perbuatan di masa lalunya (meng e hek sistem kerajaan null ocean ) yang membuat kerajaan null ocean harus service wifi ke david de tech la ponto [tukang service elektronik bergelar s2 teknik informatika]'
} satisfies IChar

const RatuBackEnd={
    id:2419,
    name:'alexia de la conte',
    age:24,
    mission:'meminta bantuan ke kerajaan bug de indomi untuk membebaskan sugiono de la forest dari cengkraman raja gideon',
    description:'mendengar kabar bahwa sugiono de la forest ditangkap oleh kerajaan null ocean alexiapun meminta bantuan kerajaan bug de indomi untuk membebaskan sugiono de la forest '
} satisfies IChar

const PadukaFullStek={
    id:2910,
    name:'ueno takahashi',
    age:29,
    description:'mendengar permintaan alexia, ueno takahashi selaku pemimpin kerajaan bug de indomi tentu saja raja uenopun memenuhi permintaan alexia dengan mengirimkan 300 ribu bala tentara bersenjatakan metasploit menuju kerajaan null ocean'
} satisfies IChar

export default IChar