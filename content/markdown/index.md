+++
title = 'Markdown'
+++
# Edición básica

### Titulos

Para establecer los titulos usaré la siguiente sintaxis

```makefile

# titulo1
## titulo2
### titulo3
#### titulo4
##### titulo5
###### titulo6
```

Y se verá

---
# titulo1
## titulo2
### titulo3
#### titulo4
##### titulo5
###### titulo6
---

### Negrita y formato

Para ver el texto en negrita escribo

```markdown
**Texto en negrita** texto normal
```

Y se verá

**Texto en negrita** texto normal

---

# Gráficos

{{< mermaid >}}
graph BT
Navegador --Llama--> B[Servidor Web]
C --> D
B --> E
D --> E
{{< /mermaid >}}

Ejemplo:
```markdown
graph BT
Navegador --Llama--> B[Servidor Web]
C --> D
B --> E
D --> E
```

{{< mermaid >}}
graph LR
Estudiante --> Estudiar{Decision}
Estudiar -->|Si| Aprobar
Estudiar -->|No| Suspender
{{< /mermaid >}}

Ejemplo:
```markdown
graph LR
Estudiante --> Estudiar{Decision}
Estudiar -->|Si| Aprobar
Estudiar -->|No| Suspender
```
---

# Edición extendida

## Listas
#### Lista no ordenada
- Elemento 1
- Elemento 2
    - Sub-elemento 2.1
    - Sub-elemento 2.2
- Elemento 3

#### Lista ordenada
1. Elemento 1
2. Elemento 2
    1. Sub-elemento 2.1
    2. Sub-elemento 2.2
3. Elemento 3
---
## Enlaces
[CPIFP Los Enlaces](https://cpilosenlaces.com)
```makefile
[Texto del enlace](https://ejemplo.com)
```
---
## Imágenes

![Cara de sorpresa](pngegg.png)
```markdown
![Texto alternativo](ruta/de/la/imagen)
```

### Tambien se pueden insertar videos de youtube
{{<youtube _PPWWRV6gbA>}}

---

## Tablas
| Producto | Unidades | Precio |
|----------|----------|--------|
| Manzana  | 300      | 2,79 € |
| Tomate   | 234      | 3,10 € |
```markdown
| Columna 1 | Columna 2 | Columna 3 |
|-----------|-----------|-----------|
| Dato 1    | Dato 2    | Dato 3    |
| Dato A    | Dato B    | Dato C    |
```
