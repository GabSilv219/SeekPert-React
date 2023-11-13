import './style.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const Pet = () => {
  const { petId } = useParams();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPet = async () => {
    try {
      const response = await axios.get(`https://api-seekpet-prisma.onrender.com/pet/${petId}`);
      const petData = response.data;
      setPet(petData);
    } catch (error) {
      console.error('Erro ao buscar dados do pet:', error);
      setError('Erro ao carregar dados do pet. Tente novamente mais tarde.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPet();
  }, [petId]);

  const extrairNumeros = (string) => {
    return string.replace(/\D/g, ''); // Remove tudo que não é número
  };

  return (
    <div className='container'>
      <div className="header">
        <p className="seekPet">
          SeekPet
        </p>
      </div>
      {loading && <p className='loading'>Carregando Dados do Pet...</p>}
      {pet ? (
        <div>
          <div>
            {pet.desaparecido == 'true' && pet.recompensa != null ? (
              <div>
                <div className='fieldRow'>
                  <div className='desaparecido'>
                    <p className='msgDesaparecido'>PROCURA-SE</p>
                  </div>
                  <div className='recompensa'>
                    <p className='recompensa-text'>Recompensa: {pet.recompensa}</p>
                  </div>
                </div>
                <div className='contato'>
                  <p className='contato-text'>Entre em contato com o dono</p>
                </div>
              </div>
            ) : (
              null
            )}
          </div>
          <div>
            {pet.desaparecido == 'true' && pet.recompensa == null ? (
              <div className='fieldRow'>
                <div className='desaparecido'>
                  <p className='msgDesaparecido'>PROCURA-SE</p>
                </div>
              </div>
            ) : (
              null
            )}
          </div>
          {pet.desaparecido == 'true' ? (
            <div className='info-desaparecido'>
              <div className="info-data">
                {pet.desaparecido == 'true' ? (
                  <img className='foto-desaparecido' src={`https://api-seekpet-prisma.onrender.com/pets/${pet.foto}`} alt='foto'/>
                ) : (
                  <img className='foto' src={`https://api-seekpet-prisma.onrender.com/pets/${pet.foto}`} alt='foto'/>
                )}
                <div className="info-pet">
                  <h1 className='title-pet'>Informações do Pet:</h1>
                  <div className='data'>
                    <h3>Nome: </h3>
                    <p>{pet.nome}</p>
                  </div>
                  <div className='data'>
                    <h3>Idade: </h3>
                    <p>{pet.idade}</p>
                  </div>
                  <div className='data'>
                    <h3>Especie: </h3>
                    <p>{pet.especie}</p>
                  </div>
                  <div className='data'>
                    <h3>Raça: </h3>
                    <p>{pet.raca}</p>
                  </div>
                  <div className='data'>
                    <h3>Sexo: </h3>
                    <p>{pet.sexo}</p>
                  </div>
                  <div className='data'>
                    <h3>Doenças: </h3>
                    <p>{pet.doenca}</p>
                  </div>
                  <div className='data'>
                    <h3>Vacinas: </h3>
                    <p>{pet.vacina}</p>
                  </div>
                  <div className='data'>
                    <h3>Castrado: </h3>
                    <p>{pet.castrado}</p>
                  </div>
                </div>
                    
                <div className="line"></div>

                <div className="info-dono">
                  <h1 className='title-dono'>Informações do Dono:</h1>
                  <div className='data'>
                    <h3>Nome: </h3>
                    <p>{pet.dono.nome}</p>
                  </div>
                  <div className='data'>
                    <h3 className='email'>E-mail: </h3>
                    <p>{pet.dono.email}</p>
                  </div>
                  <div className='data'>
                    <h3>Telefone: </h3>
                    <p>{pet.dono.tel}</p>
                  </div>
                    <a className='whats__button' href={`https://wa.me/${55}${extrairNumeros(pet.dono.tel)}/?text=Olá, encontrei seu pet ${pet.nome}`} target='blank'>
                      <AiOutlineWhatsApp className='icon-whats' />
                      Enviar Mensagem
                    </a>
                </div>
              </div>

            </div>
          ) : (
            <div className='info'>
            <div className="info-data">
              {pet.desaparecido == 'true' ? (
                <img className='foto-desaparecido' src={`https://api-seekpet-prisma.onrender.com/pets/${pet.foto}`} alt='foto'/>
              ) : (
                <img className='foto' src={`https://api-seekpet-prisma.onrender.com/pets/${pet.foto}`} alt='foto'/>
              )}
              <div className="info-pet">
                <h1 className='title-pet'>Informações do Pet:</h1>
                <div className='data'>
                  <h3>Nome: </h3>
                  <p>{pet.nome}</p>
                </div>
                <div className='data'>
                  <h3>Idade: </h3>
                  <p>{pet.idade}</p>
                </div>
                <div className='data'>
                  <h3>Especie: </h3>
                  <p>{pet.especie}</p>
                </div>
                <div className='data'>
                  <h3>Raça: </h3>
                  <p>{pet.raca}</p>
                </div>
                <div className='data'>
                  <h3>Sexo: </h3>
                  <p>{pet.sexo}</p>
                </div>
                <div className='data'>
                  <h3>Doenças: </h3>
                  <p>{pet.doenca}</p>
                </div>
                <div className='data'>
                  <h3>Vacinas: </h3>
                  <p>{pet.vacina}</p>
                </div>
                <div className='data'>
                  <h3>Castrado: </h3>
                  <p>{pet.castrado}</p>
                </div>
              </div>
                  
              <div className="line"></div>

              <div className="info-dono">
                <h1 className='title-dono'>Informações do Dono:</h1>
                <div className='data'>
                  <h3>Nome: </h3>
                  <p>{pet.dono.nome}</p>
                </div>
                <div className='data'>
                  <h3 className='email'>E-mail: </h3>
                  <p>{pet.dono.email}</p>
                </div>
                <div className='data'>
                  <h3>Telefone: </h3>
                  <p>{pet.dono.tel}</p>
                </div>
                  <a className='whats__button' href={`https://wa.me/${55}${extrairNumeros(pet.dono.tel)}/?text=Olá, encontrei seu pet ${pet.nome}`} target='blank'>
                    <AiOutlineWhatsApp className='icon-whats' />
                    Enviar Mensagem
                  </a>
              </div>
            </div>
          </div>
          )}
        </div>
      ) : (
        error && <p className='error'>{error}</p>
      )}


      <footer className='footer'>
        <span>
          &#169; All Rights Reserved By 
        </span>
        <a href="#home">SeekPet.</a>
      </footer>
    </div>
  );
};

export default Pet;