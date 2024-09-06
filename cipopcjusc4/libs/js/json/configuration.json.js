Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"CIPOP CEJUSC","publishDate":"06/09/2024 16:44:15","pages":[{"id":"5f7c278f-d960-41a2-a92d-7966154cdb44","name":"CIPOP CEJUSC 4","version":"1.0","author":"juliana.galvao","image":"files\\diagrams\\CIPOP_CEJUSC_4.png","isSubprocessPage":false,"elements":[{"id":"00b55f42-0e79-4ccd-a6eb-cd4f6fe9c5dd","name":"CIPOP CEJUSC","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":698.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"0f7c87fd-e0dc-42e2-a8a1-18152e035b96","name":"Processo distribuído a uma das Varas do Trabalho","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":158.0,"y":316.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"031d7b42-4c05-45f9-9c56-48f33fc57938","name":"Solicitar à VT o envio do processo","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- Antes do processo ser enviado ao CEJUSC, ele é levado à livre distribuição, portanto, é necessário entrar em contato, por e-mail, com a VT que recebeu o processo solicitando o envio ao CEJUSC; </span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- a vara não é obrigada a remeter o processo ao CEJUSC, portanto, ela pode se recusar.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":234.0,"y":301.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d501058d-0b81-4fa2-ba16-8976df24efa7","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":361.0,"y":311.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"VT não enviou","elementType":"SequenceFlow","properties":[]},{"name":"VT enviou","elementType":"SequenceFlow","properties":[]}]},{"id":"edeff041-be46-4f95-9c62-98bca8fd8807","name":"Receber processo e marcar audiência","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- no CEJUSC há vagas de audiência à tarde específicas para este público. As audiências são feitas diretamente pelo juiz supervisor ou juiz coordenador que terá um olhar diferenciado para essas demandas, procurando os melhores caminhos de solução.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":474.0,"y":297.0}],"radius":0.0,"height":68.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"e5155dae-7a42-4c22-9a72-6680dc83a8de","name":"Citar a Ré","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- citação da ré: buscas para localização do endereço da ré, quando necessário, são feitas com o auxilio do MPT. São usadas as ferramentas de localização que ficam contidas no PDPJ (Plataforma Digital do Poder Judiciário).</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":612.0,"y":301.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"3b3fd192-2fbf-4ba4-977b-18c766df86f8","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":739.0,"y":311.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Citação positiva","elementType":"SequenceFlow","properties":[]},{"name":"Citação negativa","elementType":"SequenceFlow","properties":[]}]},{"id":"e424f3b7-55b7-4582-b03e-b95688b4a144","name":"Efetuar novas tentativas de citação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":714.0,"y":565.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8f555dea-5551-4dc8-a2bf-3a1a4e25c26f","name":"Aguardar data da audiência","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":863.0,"y":316.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"d557599e-a12f-4758-bcb6-5bf717b95919","name":"Realizar audi\rência","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Se uma das partes não comparecer à audiência, a audiência poderá ser adiada para uma nova tentativa ou o processo poderá ser devolvido à VT.</span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":968.0,"y":301.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"47a224fb-63cc-423d-8f29-de32cd30da28","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1107.0,"y":311.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Acordo","elementType":"SequenceFlow","properties":[]},{"name":"Adiamento da audiência","elementType":"SequenceFlow","properties":[]},{"name":"Devolução à VT","elementType":"SequenceFlow","properties":[]}]},{"id":"7dcdaccb-1980-464e-b016-38989fda7aa1","name":"Adiar audiência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1285.0,"y":503.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"ae817a14-3724-4f69-8db5-b05ca03afcd7","name":"Efetuar registros","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1283.0,"y":301.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"208b8b05-08ba-4a59-85bc-2e2b66a65083","name":"Remeter à VT","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1423.0,"y":301.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"dffacc8d-b79e-4326-a112-8d788bb27775","name":"Event","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1562.0,"y":316.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd"},{"id":"98114366-ce94-4d84-a656-c47280379063","name":"Efetuar registros","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1286.0,"y":126.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2234a1c0-e1f6-48ac-8ae1-ccaa384cb76a","name":"Remeter à VT","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1426.0,"y":126.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"640f12d8-0991-49fd-8f4d-bdedd34ad5b4","name":"Acordo realizado","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1567.0,"y":141.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"1c756213-583a-4a0c-a312-a276a5a1a4f2","name":"Event","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":366.0,"y":402.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd"},{"id":"5165aec0-d86f-4b36-8aa5-13e18cfdff13","name":"Ata de audiência","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 36pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\">Nesta ata, haverá a motivação do adiamento, como, por exemplo, as partes querem amadurecer as opções de acordo, desejam buscar alguma informação ou autorização relevante para que o acordo seja realizado, houve ausência justificada da parte e ainda desejam uma nova tentativa. As opções são muitas e estarão registradas na Ata para que possam ser compreendidas posteriormente em uma consulta</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1399.0,"y":575.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","value":"","type":"text"}]},{"id":"7e1c6a64-e550-4666-a755-c52b4dd12a21","name":"Atade audiência","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">No sistema PJE registram-se informações, como: </span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">- valor do acordo, valor das custas, contribuição previdenciária, Imposto de Renda, cláusula penal, número de parcelas, discriminação das verbas.</span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:#FFFF00;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">Se o acordo é pós sentença ou não (nesse caso registra como homologação da transação)</span><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\"> </span><span style=\"color:#FF0000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">=> aguardar explicação da dra. Mauren sobre essa frase.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1311.0,"y":199.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","value":"","type":"text"}]},{"id":"888d1300-3d7f-4169-a117-bb0f94e77ce7","name":"Ata de audiência","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 36pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\">Nessa ata de devolução pode haver o registro da pretensão autoral para acordo e a oferta da ré, mas essa informação não é obrigatória. É uma informação que pode ser útil mais adiante, embora, nem sempre as partes autorizam o registro; há, ainda que breve, a justificativa da ausência de conciliação por motivos, do tipo, a ré não apresentou proposta, os valores propostos pelas partes estão muito divergentes, ausência de uma das partes, não há interesse em conciliar. Tudo depende da prova técnica. As opção são muitas.</span></p>","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1308.0,"y":378.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","value":"","type":"text"}]},{"id":"70fd2af9-ca73-4fdc-bb34-f1461567d61a","name":"CEJUSC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":698.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"b67cbd63-0e98-4c2d-8b8f-95c3f6610b7d","name":"e-mail","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">e-mail: </span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 36pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:bold;font-style:normal;\">Assunto:</span><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\"> Solicitação de remessa dos autos ao Cejusc-CAP- 1ºgrau - processo:<br/></span><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:bold;font-style:normal;\"><br/><br/></span><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">Prezado(a) Diretor(a) de Secretaria, bom dia / boa tarde.<br/><br/>Por determinação da Exma. Juíza Coordenadora do CEJUSC-JT 1º Grau, Dra. Mauren Xavier Seeling, tendo em vista a participação do nosso regional no Acordo de Cooperação que visa à criação e à instalação do Comitê Interinstitucional de Atenção à População em Situação de Rua do Estado do Rio de Janeiro – CIPOP-RUA/RJ (Resolução 425/2021, do CNJ), informamos o interesse da parte autora em conciliar no processo abaixo indicado, neste CEJUSC-CAP:</span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">Processo:</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 36pt;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\"><br/>Solicitamos os valiosos préstimos de </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"><a href=\"http://V.Sa\" target=\"_blank\" style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;text-decoration:none;\"><span style=\"color:#0000FF;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;text-decoration: underline;\">V.Sa</span></a></span><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">. no sentido de submeter esta mensagem à apreciação do Exmo. Juiz Titular para que, se assim entender, determinar a remessa dos autos ao Centro Judiciário de Métodos Consensuais de Solução de  Disputas da Capital - CEJUSC-CAP de 1º grau, para inclusão em pauta de conciliação a ser designada para o dia </span><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:bold;font-style:normal;\">XXXXX, às XXhXXmin</span><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:11pt;font-weight:normal;font-style:normal;\">, sendo muito importante que a cópia do presente e-mail seja anexada aos autos solicitados, bem como que seja mantida a audiência porventura designada nesta Vara do Trabalho.</span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\"> </span></p><p style=\"text-align:left;text-indent:36pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:11pt;font-weight:normal;font-style:normal;\">Colocamo-nos à inteira disposição para esclarecer dúvidas, solicitando que sejam enviadas ao endereço eletrônico: cnup@trt1.jus.br</span></p>","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":257.0,"y":383.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","value":"","type":"text"}]}]}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"0478af19-bf9b-47e3-b498-6e8df81529cb","containerName":"CIPOP CEJUSC","isSubprocess":false,"elements":[{"id":"86165d70-8161-4769-bc7d-a8e417545e03","value":"CIPOP CEJUSC"},{"id":"5fd3f383-27f4-4ad3-a32b-dc6235743a4e","value":"CEJUSC"},{"id":"c11994f2-6ba9-4ec8-9a80-51c70380033b","value":"Ata de audiência"},{"id":"5648751d-cf28-4e1f-a303-7be563fb9395","value":"Atade audiência"},{"id":"204df177-f366-4c8f-ac6e-f46788c3e1c3","value":"Ata de audiência"},{"id":"6272a74e-fea9-4553-8426-8a2ed7f74a8f","value":""},{"id":"2da389e4-1398-421c-911a-2731b639eece","value":"Receber processo e marcar audiência"},{"id":"1e80921e-6bcb-49cb-a49c-03e8c8edf06d","value":""},{"id":"d51aa6d2-924d-43f2-ae04-03b20bdd8742","value":"Processo distribuído a uma das Varas do Trabalho"},{"id":"f04afcc8-2553-4398-b629-e943aa623699","value":"Efetuar registros"},{"id":"adfe4b7a-63cb-4869-82ee-151c1654f0ca","value":"Solicitar à VT o envio do processo"},{"id":"2381d3c6-7cf7-41ec-9fba-ee20ec7e8691","value":"Efetuar novas tentativas de citação"},{"id":"1e94c18d-9097-4481-8543-3ad70c28ee5b","value":"Aguardar data da audiência"},{"id":"76fb7e8b-05a2-4189-a5ea-5ffc2f44e4c1","value":"Citar a Ré"},{"id":"4c4ff955-cd81-46f1-aea6-821aafbc625c","value":"Realizar audi\rência"},{"id":"060c426a-bfa1-438c-bacc-bd5466295e6e","value":""},{"id":"9d7c75eb-4733-460a-8d45-ae46d41844de","value":""},{"id":"d08c46fc-5a9f-48f0-aa90-9615d3c1c21d","value":""},{"id":"2cab9a7e-f9dd-4282-99a3-0234470e203b","value":"Remeter à VT"},{"id":"8a9c4b45-29a4-4607-b4a7-3918adc40073","value":"Adiar audiência"},{"id":"424d5de9-0e54-4970-8281-6f7ab3fee467","value":""},{"id":"7c7d8cd1-0c01-433d-8f23-3ef183de6119","value":"Acordo realizado"},{"id":"453b3c05-979d-45b7-b615-0288959cf0cb","value":""},{"id":"e2903288-e0c2-4ae6-9699-d2ea41dd357a","value":"Efetuar registros"},{"id":"d842e7a2-66c8-4bba-bdcd-0236418abf92","value":"Remeter à VT"},{"id":"8b17d31d-760a-42f8-864f-578d951eb468","value":""},{"id":"f90f80d0-024b-48b5-b169-3badbb49314e","value":"Intimar parte ausente "},{"id":"8d23e471-d6bc-46ab-8605-1074da0703b4"},{"id":"b1f34e0d-0727-4f80-91ac-e89576dc7b6c"},{"id":"45d5c7fc-27c6-4ea3-b775-501daef91956"},{"id":"f36a025c-7f5f-4f23-8111-f48d2fba36a1"}]},{"containerId":"5f7c278f-d960-41a2-a92d-7966154cdb44","containerName":"CIPOP CEJUSC 4","isSubprocess":false,"elements":[{"id":"00b55f42-0e79-4ccd-a6eb-cd4f6fe9c5dd","value":"CIPOP CEJUSC"},{"id":"70fd2af9-ca73-4fdc-bb34-f1461567d61a","value":"CEJUSC"},{"id":"5165aec0-d86f-4b36-8aa5-13e18cfdff13","value":"Ata de audiência"},{"id":"7e1c6a64-e550-4666-a755-c52b4dd12a21","value":"Atade audiência"},{"id":"888d1300-3d7f-4169-a117-bb0f94e77ce7","value":"Ata de audiência"},{"id":"e5155dae-7a42-4c22-9a72-6680dc83a8de","value":"Citar a Ré"},{"id":"2234a1c0-e1f6-48ac-8ae1-ccaa384cb76a","value":"Remeter à VT"},{"id":"e424f3b7-55b7-4582-b03e-b95688b4a144","value":"Efetuar novas tentativas de citação"},{"id":"208b8b05-08ba-4a59-85bc-2e2b66a65083","value":"Remeter à VT"},{"id":"640f12d8-0991-49fd-8f4d-bdedd34ad5b4","value":"Acordo realizado"},{"id":"7dcdaccb-1980-464e-b016-38989fda7aa1","value":"Adiar audiência"},{"id":"dffacc8d-b79e-4326-a112-8d788bb27775","value":""},{"id":"8f555dea-5551-4dc8-a2bf-3a1a4e25c26f","value":"Aguardar data da audiência"},{"id":"ae817a14-3724-4f69-8db5-b05ca03afcd7","value":"Efetuar registros"},{"id":"edeff041-be46-4f95-9c62-98bca8fd8807","value":"Receber processo e marcar audiência"},{"id":"1c756213-583a-4a0c-a312-a276a5a1a4f2","value":""},{"id":"031d7b42-4c05-45f9-9c56-48f33fc57938","value":"Solicitar à VT o envio do processo"},{"id":"0f7c87fd-e0dc-42e2-a8a1-18152e035b96","value":"Processo distribuído a uma das Varas do Trabalho"},{"id":"98114366-ce94-4d84-a656-c47280379063","value":"Efetuar registros"},{"id":"d557599e-a12f-4758-bcb6-5bf717b95919","value":"Realizar audi\rência"},{"id":"d501058d-0b81-4fa2-ba16-8976df24efa7","value":""},{"id":"3b3fd192-2fbf-4ba4-977b-18c766df86f8","value":""},{"id":"47a224fb-63cc-423d-8f29-de32cd30da28","value":""},{"id":"b67cbd63-0e98-4c2d-8b8f-95c3f6610b7d","value":"e-mail"},{"id":"37b7ba07-7384-4a02-8265-ab946965e740"},{"id":"3ec75ce2-182c-4fc0-8868-196c6ad12b0c"},{"id":"51bd666c-47a8-45ff-98f4-022b1298b32e"},{"id":"7cfb8c73-9cb8-4240-9d98-14ca7fc0159a"},{"id":"2b463dd2-cd3b-4f0e-9535-d2077357a754"}]}]}