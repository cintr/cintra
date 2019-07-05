var aries = {

    nome: "Áries",

    descricao: "Pessoas do signo de Áries são sinceras e espontâneas mas também podem ser agressivas, impulsivas ou intolerantes."
};


var touro = {

    nome: "Touro",

    descricao: "Pessoas do signo de Touro são solidas e firmes mas também podem ser teimosas, inertes ou materialistas."
};


var gemeos = {

    nome: "Gêmeos",

    descricao: "Pessoas do signo de Gêmeos são inteligentes e versáteis mas também podem ser inquietas, com pouca concentração e contraditórias."
};


var cancer = {

    nome: "Câncer",

    descricao: "Pessoas do signo de Câncer são sensíveis e intuitivas mas também podem ser rancorosas e manipuladoras."
};


var leao = {

    nome: "Leão",

    descricao: "Pessoas do signo de Leão são generosas e otimistas mas também podem ser arrogantes e autoritárias."
};


var virgem = {

    nome: "Virgem",

    descricao: "Pessoas do signo de Virgem são perfeccionistas e analíticas mas também podem ser obsessivas e críticas."
};


var libra = {

    nome: "Libra",

    descricao: "Pessoas do signo de Libra são gentis e cooperativas mas também podem ser indecisas e inconstantes."
};


var escorpiao = {

    nome: "Escorpião",

    descricao: "Pessoas do signo de Escorpião são profundas e intensas mas também podem ser mórbidas e sarcasticas."
};


var sagitario = {

    nome: "Sagitário",

    descricao: "Pessoas do signo de Sagitário são perceptivas e intuitivas mas também podem ser arrogantes e intrometidas."
};


var capricornio = {

    nome: "Capricórnio",

    descricao: "Pessoas do signo de Capricórnio são responsáveis e práticas mas também podem ser negativistas e mal-humoradas."
};


var aquario = {

    nome: "Aquário",

    descricao: "Pessoas do signo de Aquário são originais e independentes mas também podem ser exageradas e radicais."
};


var peixes = {

    nome: "Peixes",

    descricao: "Pessoas do signo de Peixes são simpáticas e sensíveis mas também podem ser negativas e iludidas."
};



function pesquisar() {


    var nome = document.getElementById('nome').value;


    if (nome == null || nome == "") {

        alert("Precisamos de seu nome");

    }

    else {

        var datanasc = document.getElementById('nascimento').value;

        var d = datanasc.slice(8, 10);

        var m = datanasc.slice(5, 7);


        //dia do ano

        var da = dia(d, m);


        document.getElementById('apresentacao').innerHTML = nome + ", descobrimos seu signo solar. Ele é:";


        if (da >= 20 && da <= 49) {

		alert("Seu signo é Aquário");
 
            document.getElementById('signo-nome').innerHTML = aquario.nome;

            document.getElementById('signo-desc').innerHTML = aquario.descricao;

        }


        if (da >= 80 && da <= 109) {
		alert("Seu signo é Áries");
 
            document.getElementById('signo-nome').innerHTML = aries.nome;

            document.getElementById('signo-desc').innerHTML = aries.descricao;

        }


        if (da >= 173 && da <= 203) {

		alert("Seu signo é Câncer");
 
            document.getElementById('signo-nome').innerHTML = cancer.nome;

            document.getElementById('signo-desc').innerHTML = cancer.descricao;

        }


        if (da >= 365 && da <= 19) {

		alert("Seu signo é Capricórnio");
  
            document.getElementById('signo-nome').innerHTML = capricornio.nome;

            document.getElementById('signo-desc').innerHTML = capricornio.descricao;

        }


        if (da >= 141 && da <= 172) {

		alert("Seu signo é Gêmeos");
 
            document.getElementById('signo-nome').innerHTML = gemeos.nome;

            document.getElementById('signo-desc').innerHTML = gemeos.descricao;

        }


        if (da >= 204 && da <= 234) {

		alert("Seu signo é Leão");
   
            document.getElementById('signo-nome').innerHTML = leao.nome;

            document.getElementById('signo-desc').innerHTML = leao.descricao;

        }


        if (da >= 266 && da <= 295) {

		alert("Seu signo é Libra");
 
            document.getElementById('signo-nome').innerHTML = libra.nome;

            document.getElementById('signo-desc').innerHTML = libra.descricao;

        }


        if (da >= 50 && da <= 79) {
		alert("Seu signo é Peixes");
 
            document.getElementById('signo-nome').innerHTML = peixes.nome;

            document.getElementById('signo-desc').innerHTML = peixes.descricao;

        }


        if (da >= 326 && da <= 355) {

		alert("Seu signo é Sagitário");
 
            document.getElementById('signo-nome').innerHTML = sagitario.nome;

            document.getElementById('signo-desc').innerHTML = sagitario.descricao;

        }


        if (da >= 296 && da <= 325) {

		alert("Seu signo é Escorpião");
 
            document.getElementById('signo-nome').innerHTML = escorpiao.nome;

            document.getElementById('signo-desc').innerHTML = escorpiao.descricao;

        }


        if (da >= 110 && da <= 140) {

		alert("Seu signo é Touro");
 
            document.getElementById('signo-nome').innerHTML = touro.nome;

            document.getElementById('signo-desc').innerHTML = touro.descricao;

        }


        if (da >= 235 && da <= 265) {

		alert("Seu signo é Virgem");
 
            document.getElementById('signo-nome').innerHTML = virgem.nome;

            document.getElementById('signo-desc').innerHTML = virgem.descricao;

        }


        document.getElementById('nome').value = "";

        document.getElementById('nascimento').value = "";

    }


}



function dia(d, m) {

    var ano = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var diaano = 0;

    d = d * 1;
    m = m * 1;


    for (var x = 0; x < (m - 1); x++) {

        diaano += ano[x];

    }


    diaano += d;

    return diaano;
}