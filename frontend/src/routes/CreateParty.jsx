const CreateParty = () => {
  return (
    <div className="form-page">
      <h2>Crie sua próxima festa</h2>
      <p>Defina o seu o seu orçamento</p>
      <form>
        <label>
          <span>Nome</span>
          <input type="text" placeholder="Seja criativo..." required />
        </label>
        <label>
          <span>Anfitrião</span>
          <input type="text" placeholder="Quem está dando a festa?" required />
        </label>
        <label>
          <span>Descrição</span>
          <textarea
            placeholder="Conte mais sobre a festa..."
            required
          ></textarea>
        </label>
        <label>
          <span>Orçamento</span>
          <input
            type="text"
            placeholder="Quanto você pretende insvestir?"
            required
          />
        </label>
        <label>
          <span>Imagem:</span>
          <input
            type="text"
            placeholder="Insira a URL de uma imagem"
            required
          />
        </label>
        <div>
          <h2>Escolha os serviços</h2>
          <div className="services-container">
            <p>serviços...</p>
          </div>
        </div>
        <input type="submit" value="Criar Festa" className="btn" />
      </form>
    </div>
  );
};

export default CreateParty;
