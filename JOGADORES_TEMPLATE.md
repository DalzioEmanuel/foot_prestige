# Template de Adicionar Jogadores

## Como adicionar um novo jogador à página

### 1. Localizar a seção de jogadores
No arquivo `index.html`, procure pela seção com `id="players"` (por volta da linha 120).

### 2. Copiar o template
Copie o bloco comentado no final da grid de jogadores:

```html
<!-- TEMPLATE: Modelo vazio para copiar -->
<!-- 
<article class="player-card" data-position="Posição do Jogador">
  <div class="player-header">
    <div class="player-avatar" aria-hidden="true"></div>
  </div>
  <div class="player-info">
    <h3>Nome do Jogador</h3>
    <p class="player-position">Posição (ex: Médio Defensivo)</p>
    <div class="player-details">
      <span class="detail-item">
        <span class="detail-label">Nacionalidade</span>
        <span class="detail-value">País</span>
      </span>
      <span class="detail-item">
        <span class="detail-label">Clube</span>
        <span class="detail-value">Nome do Clube</span>
      </span>
      <span class="detail-item">
        <span class="detail-label">Contrato</span>
        <span class="detail-value">até AAAA</span>
      </span>
      <span class="detail-item">
        <span class="detail-label">Valor Mercado</span>
        <span class="detail-value">X,XX M €</span>
      </span>
    </div>
  </div>
</article>
-->
```

### 3. Descomente e edite
Cole o template **antes** do comentário `<!-- TEMPLATE: Modelo vazio para copiar -->` e faça as alterações:

```html
<article class="player-card" data-position="Defesa Lateral Esquerdo">
  <div class="player-header">
    <div class="player-avatar" aria-hidden="true"></div>
  </div>
  <div class="player-info">
    <h3>João Silva</h3>
    <p class="player-position">Defesa Lateral Esquerdo</p>
    <div class="player-details">
      <span class="detail-item">
        <span class="detail-label">Nacionalidade</span>
        <span class="detail-value">Portugal</span>
      </span>
      <span class="detail-item">
        <span class="detail-label">Clube</span>
        <span class="detail-value">Benfica</span>
      </span>
      <span class="detail-item">
        <span class="detail-label">Contrato</span>
        <span class="detail-value">até 2027</span>
      </span>
      <span class="detail-item">
        <span class="detail-label">Valor Mercado</span>
        <span class="detail-value">4,50 M €</span>
      </span>
    </div>
  </div>
</article>
```

### 4. Adicionar destaque (opcional)
Se o jogador é um destaque, adicione a classe `featured` e o badge:

```html
<article class="player-card featured" data-position="Avançado">
  <div class="player-header">
    <div class="player-avatar" aria-hidden="true"></div>
    <div class="player-badge">Destaque</div>
  </div>
  <!-- resto do código... -->
</article>
```

## Campos a preencher

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| `data-position` | Posição do jogador | "Médio Defensivo" |
| `<h3>` | Nome completo | "Maestro" |
| `player-position` | Posição (repetir ou especificar) | "Médio Defensivo" |
| **Nacionalidade** | País de origem | "Angola" |
| **Clube** | Clube atual | "Alanyaspor" |
| **Contrato** | Data final do contrato | "até 2029" |
| **Valor Mercado** | Valor em euros | "7,00 M €" |

## Posições comuns

- Guarda-Redes
- Defesa Central
- Defesa Lateral Direito
- Defesa Lateral Esquerdo
- Médio Defensivo
- Médio Centro
- Médio Ofensivo
- Extremo Direito
- Extremo Esquerdo
- Avançado
- Ponta de Lança

## Notas importantes

✅ A grid se adapta automaticamente (2 colunas em desktop, 1 em mobile)
✅ O `.player-avatar` é um espaço em branco (gradiente) - será preenchido com fotos no futuro
✅ Use `.featured` apenas para destacar 1-2 jogadores principais
✅ O `.player-badge` com texto "Destaque" aparece apenas com a classe `featured`
✅ A classe `highlight` destaca o valor de mercado em laranja

## Exemplo completo com 2 novos jogadores

```html
<div class="player-grid" id="playerGrid">
  <!-- Jogador destacado -->
  <article class="player-card featured" data-position="Médio Defensivo">
    <div class="player-header">
      <div class="player-avatar" aria-hidden="true"></div>
      <div class="player-badge">Destaque</div>
    </div>
    <div class="player-info">
      <h3>Maestro</h3>
      <p class="player-position">Médio Defensivo</p>
      <div class="player-details">
        <span class="detail-item">
          <span class="detail-label">Nacionalidade</span>
          <span class="detail-value">Angola</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Clube</span>
          <span class="detail-value">Alanyaspor</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Contrato</span>
          <span class="detail-value">até 2029</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Valor Mercado</span>
          <span class="detail-value highlight">7,00 M €</span>
        </span>
      </div>
    </div>
  </article>

  <!-- Novo jogador 1 -->
  <article class="player-card" data-position="Ponta de Lança">
    <div class="player-header">
      <div class="player-avatar" aria-hidden="true"></div>
    </div>
    <div class="player-info">
      <h3>Ivanilson</h3>
      <p class="player-position">Ponta de Lança</p>
      <div class="player-details">
        <span class="detail-item">
          <span class="detail-label">Nacionalidade</span>
          <span class="detail-value">Angola</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Clube</span>
          <span class="detail-value">CSKA Moscou</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Contrato</span>
          <span class="detail-value">até 2028</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Valor Mercado</span>
          <span class="detail-value">2,50 M €</span>
        </span>
      </div>
    </div>
  </article>

  <!-- Novo jogador 2 -->
  <article class="player-card" data-position="Médio Centro">
    <div class="player-header">
      <div class="player-avatar" aria-hidden="true"></div>
    </div>
    <div class="player-info">
      <h3>Téo Zeferino</h3>
      <p class="player-position">Médio Centro</p>
      <div class="player-details">
        <span class="detail-item">
          <span class="detail-label">Nacionalidade</span>
          <span class="detail-value">Portugal</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Clube</span>
          <span class="detail-value">Sporting CP</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Contrato</span>
          <span class="detail-value">até 2030</span>
        </span>
        <span class="detail-item">
          <span class="detail-label">Valor Mercado</span>
          <span class="detail-value">5,75 M €</span>
        </span>
      </div>
    </div>
  </article>
</div>
```
