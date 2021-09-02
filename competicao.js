const Ualace = [60, 40, 10];
const Leilane = [30, 20, 50];
const nomes = ["Ualace", "Leilane"];

function encontraGanhador(a,b,n)
{
    let aPontos = 0;
    let bPontos = 0;
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] > b[i])
        {
            aPontos++;
        }
        else if(b[i] > a[i])
        {
            bPontos++;
        }
    }

    if(aPontos > bPontos)
    {
        return n[0];
    }
    else if(bPontos > aPontos)
    {
        return n[1];
    }
    else
    {
        return "Empate";
    }
}

console.log("-------------------------------------------------------------------------------");
console.log("O(a) vencedor(a) foi o(a) " + encontraGanhador(Ualace,Leilane,nomes));


