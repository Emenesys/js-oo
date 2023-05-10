const user = {
    nome: "Cleber",
    email: "cleber@gmail.com",
    nascimento: "1979/12/09",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)

    }
}

const admin = {
    nome: "Cleber",
    email: "cjc@gmail.com",
    role: "admin",
    criarCurso() {
        console.log('Curso Criado!!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()



