const tipo = document.getElementById("tipo");
const campoAut = document.getElementById("campo-aut");
const campoServico = document.getElementById("campo-servico");

function atualizarCampos(){
    campoAut.hidden = tipo.value === "morador";
    campoServico.hidden = tipo.value !== "prestador";
}

tipo.addEventListener("change", atualizarCampos);
atualizarCampos();

