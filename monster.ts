class Monstro{
    public nome: string
    forca : number 
    nivel : number 
    altura : number
     constructor(nome:string, nivel:number, forca:number, altura:number){
        this.nome = nome
        this.nivel = nivel
        this.forca = forca
        this.altura = altura
     }

    causarMedo(){
        console.log("Causar medo") 
    }
}
 let monstro1 = new Monstro("Joaquim",2000, 42572169, 210)
 monstro1.nivel = 12843
console.log(monstro1)

 let monstro2 = new Monstro("Enzo", 10, 9, 61)
console.log(monstro2)