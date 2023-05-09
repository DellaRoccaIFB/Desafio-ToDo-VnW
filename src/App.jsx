import { React, Component } from "react";
import { createGlobalStyle } from "styled-components";
import * as S from "./Style_app";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0 auto;
    max-width: 1440px;
    background-color: #171321;
    color: #FFFFFF;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
`;

export default class App extends Component {
  state = {
    Afazer: "",
    ListaDeAfazeres: [],
  };

  handleChange = (event) => {
    this.setState({
      Afazer: event.target.value,
    });
  };

  adicioneEsseAfazer = () => {
    if (this.state.Afazer === "") {
      return;
    }

    this.setState({
      ListaDeAfazeres: this.state.ListaDeAfazeres.concat({
        Afazer: this.state.Afazer,
        id: Math.random(),
      }),
      Afazer: "",
    });
  };

  apagarEsseAfazer = (id) => {
    this.setState({
      ListaDeAfazeres: this.state.ListaDeAfazeres.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  render() {
    return (
      <>
        <S.Container>
          <GlobalStyle />
          <S.Box>
            <S.H2> Lista de coisas para fazer</S.H2>
            <S.BoxInputAndButton>
              <S.Input
                placeholder="Qual a próxima tarefa?"
                onChange={this.handleChange}
                value={this.state.Afazer}
                maxlength="10"
              />

              <S.ButtonAdd onClick={this.adicioneEsseAfazer}> Add </S.ButtonAdd>
            </S.BoxInputAndButton>

            <S.H4>
              Você tem {this.state.ListaDeAfazeres.length} coisa(s) para fazer
            </S.H4>
            <S.Ul>
              {this.state.ListaDeAfazeres.map((item) => (
                <S.Li>
                  
                  <S.Content>{item.Afazer}</S.Content>
                  <S.ButtonAdd
                    onClick={() => {
                      this.apagarEsseAfazer(item.id);
                    }}
                  >
                    
                    X
                  </S.ButtonAdd>
                </S.Li>
              ))}
            </S.Ul>
          </S.Box>
        </S.Container>
      </>
    );
  }
}
