Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"CIPOP CEJUSC","publishDate":"30/08/2024 10:51:16","pages":[{"id":"0478af19-bf9b-47e3-b498-6e8df81529cb","name":"CIPOP CEJUSC","version":"1.0","author":"juliana.galvao","image":"files\\diagrams\\CIPOP_CEJUSC.png","isSubprocessPage":false,"elements":[{"id":"86165d70-8161-4769-bc7d-a8e417545e03","name":"CIPOP CEJUSC","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":20.0}],"radius":0.0,"height":900.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"d51aa6d2-924d-43f2-ae04-03b20bdd8742","name":"Processo distribuído a uma das Varas do Trabalho","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":158.0,"y":359.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"adfe4b7a-63cb-4869-82ee-151c1654f0ca","name":"Solicitar à VT o envio do processo","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- Antes do processo ser enviado ao CEJUSC, ele é levado à livre distribuição, portanto, é necessário entrar em contato, por e-mail, com a VT que recebeu o processo solicitando o envio ao CEJUSC; </span><span style=\"color:#E36C0A;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">há modelo de e-mail? Se houver, poderia me passar? Dra, mantive essa pergunta porque não lembro se foi aqui que a sra disse que eu teria que falar com algum servidor.</span></p><p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- a vara não é obrigada a remeter o processo ao CEJUSC, portanto, ela pode se recusar.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":234.0,"y":344.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9d7c75eb-4733-460a-8d45-ae46d41844de","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":361.0,"y":354.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"VT não enviou","elementType":"SequenceFlow","properties":[]},{"name":"VT enviou","elementType":"SequenceFlow","properties":[]}]},{"id":"6272a74e-fea9-4553-8426-8a2ed7f74a8f","name":"Event","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":366.0,"y":445.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd"},{"id":"2da389e4-1398-421c-911a-2731b639eece","name":"Receber processo e marcar audiência","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- no CEJUSC há vagas de audiência à tarde específicas para este público. As audiências são feitas diretamente pelo juiz supervisor ou juiz coordenador que terá um olhar diferenciado para essas demandas, procurando os melhores caminhos de solução.</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":474.0,"y":340.0}],"radius":0.0,"height":68.0,"width":99.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"76fb7e8b-05a2-4189-a5ea-5ffc2f44e4c1","name":"Citar a Ré","description":"<p style=\"text-align:justify;text-indent:0pt;margin:0pt 0pt 0pt 71pt;line-height:1.15;mso-margin-top-alt:auto;mso-margin-bottom-alt:auto;\"><span style=\"color:#000000;background-color:transparent;font-family:Verdana;font-size:14pt;font-weight:normal;font-style:normal;\">- citação da ré: buscas para localização do endereço da ré, quando necessário, são feitas com o auxilio do MPT. São usadas as ferramentas de localização que ficam contidas no PDPJ (Plataforma Digital do Poder Judiciário).</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"> </span></p>","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":612.0,"y":344.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"060c426a-bfa1-438c-bacc-bd5466295e6e","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":739.0,"y":354.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Citação negativa","elementType":"SequenceFlow","properties":[]},{"name":"Citação positiva","elementType":"SequenceFlow","properties":[]}]},{"id":"2381d3c6-7cf7-41ec-9fba-ee20ec7e8691","name":"Efetuar novas tentativas de citação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":714.0,"y":573.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1e94c18d-9097-4481-8543-3ad70c28ee5b","name":"Aguardar data da audiência","elementImage":"files\\bpmnElements\\TimerIntermediate.png","imageBounds":{"points":[{"x":863.0,"y":359.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TimerIntermediate"},{"id":"4c4ff955-cd81-46f1-aea6-821aafbc625c","name":"Realizar audi\rência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":968.0,"y":344.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"1e80921e-6bcb-49cb-a49c-03e8c8edf06d","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1107.0,"y":354.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Presentes autor e réu","elementType":"SequenceFlow","properties":[]},{"name":"Ausente uma das partes ou ambas","elementType":"SequenceFlow","properties":[]}]},{"id":"d08c46fc-5a9f-48f0-aa90-9615d3c1c21d","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1237.0,"y":354.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Acordo","elementType":"SequenceFlow","properties":[]},{"name":"Gate","elementType":"SequenceFlow","properties":[]}]},{"id":"f04afcc8-2553-4398-b629-e943aa623699","name":"Efetuar registros","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1431.0,"y":344.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"2cab9a7e-f9dd-4282-99a3-0234470e203b","name":"Remeter à VT","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1571.0,"y":344.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"7c7d8cd1-0c01-433d-8f23-3ef183de6119","name":"Acordo realizado","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":1712.0,"y":359.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"424d5de9-0e54-4970-8281-6f7ab3fee467","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1237.0,"y":562.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Adiamento para uma nova tentativa de audiência","elementType":"SequenceFlow","properties":[]},{"name":"Devolução para a VT","elementType":"SequenceFlow","properties":[]}]},{"id":"8a9c4b45-29a4-4607-b4a7-3918adc40073","name":"Adiar audiência","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1212.0,"y":746.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"453b3c05-979d-45b7-b615-0288959cf0cb","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1101.0,"y":756.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Uma das partes não está ciênte","elementType":"SequenceFlow","properties":[]},{"name":"Aguardar data da audiência","elementType":"SequenceFlow","properties":[]}]},{"id":"e2903288-e0c2-4ae6-9699-d2ea41dd357a","name":"Efetuar registros","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1420.0,"y":552.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d842e7a2-66c8-4bba-bdcd-0236418abf92","name":"Remeter à VT","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1567.0,"y":552.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b17d31d-760a-42f8-864f-578d951eb468","name":"Event","elementImage":"files\\bpmnElements\\TerminateEnd.png","imageBounds":{"points":[{"x":1702.0,"y":567.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"TerminateEnd"},{"id":"c11994f2-6ba9-4ec8-9a80-51c70380033b","name":"Ata de audiência","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1238.0,"y":822.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"5648751d-cf28-4e1f-a303-7be563fb9395","name":"Atade audiência","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1456.0,"y":422.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"204df177-f366-4c8f-ac6e-f46788c3e1c3","name":"Ata de audiência","elementImage":"files\\bpmnElements\\DataObject.png","imageBounds":{"points":[{"x":1444.0,"y":628.0}],"radius":0.0,"height":50.0,"width":40.0,"shape":"rect"},"elementType":"DataObject","properties":[{"name":"State","type":"text"}]},{"id":"5fd3f383-27f4-4ad3-a32b-dc6235743a4e","name":"CEJUSC","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":20.0}],"radius":0.0,"height":900.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"f90f80d0-024b-48b5-b169-3badbb49314e","name":"Intimar parte ausente ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":833.0,"y":832.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]}]}]}],"texts":{"tableOfContents":"Table of Contents","pageNumber":"Page","pageNumberLabelOf":"of","version":"Version","author":"Author","description":"Description","mainPool":"Main Process","mainPoolDescription":"Main Process Description","processDiagrams":"Process Diagrams","processElements":"Process Elements","elements":"Process Elements","defaultElementName":"Element","performers":"Performers","connectors":"Connectors","connector":"Connector","home":"Home","search":"Search","goToParentProcess":"<< Go to Parent Process","visitBizagi":"Visit bizagi.com","contains":"Contains {0} Sub-Processes","showAll":"Show all","fullScreen":"Full screen","zoomIn":"Zoom In","zoomOut":"Zoom Out","close":"Close","menu":"Menu: ","errorPage":"Error when visualizing page","process":"Process","subProcess":"Published Sub-Processes","contain":"Contains","checkAttributes":"Check attributes","checkOverview":"Check overview","unavailableResource":"Unavailable resource","localResource":"Resource can be accessed locally","performer":"Performer","linktoimage":"Link to Image","presentationAction":"Presentation Actions","searchGlobal":"Search all","searchLocal":"Search in this process","searchResults":"No Results Found","titlePage":"Start","emptyElement":"This element has not yet been documented","unsupported":"Your browser does not support content displayed by this page. <br> We recommend you upgrading your browser.","details":"Details","expand":"Expand","mainPoolProperties":"Main Process properties","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"0478af19-bf9b-47e3-b498-6e8df81529cb","containerName":"CIPOP CEJUSC","isSubprocess":false,"elements":[{"id":"86165d70-8161-4769-bc7d-a8e417545e03","value":"CIPOP CEJUSC"},{"id":"5fd3f383-27f4-4ad3-a32b-dc6235743a4e","value":"CEJUSC"},{"id":"c11994f2-6ba9-4ec8-9a80-51c70380033b","value":"Ata de audiência"},{"id":"5648751d-cf28-4e1f-a303-7be563fb9395","value":"Atade audiência"},{"id":"204df177-f366-4c8f-ac6e-f46788c3e1c3","value":"Ata de audiência"},{"id":"6272a74e-fea9-4553-8426-8a2ed7f74a8f","value":""},{"id":"2da389e4-1398-421c-911a-2731b639eece","value":"Receber processo e marcar audiência"},{"id":"1e80921e-6bcb-49cb-a49c-03e8c8edf06d","value":""},{"id":"d51aa6d2-924d-43f2-ae04-03b20bdd8742","value":"Processo distribuído a uma das Varas do Trabalho"},{"id":"f04afcc8-2553-4398-b629-e943aa623699","value":"Efetuar registros"},{"id":"adfe4b7a-63cb-4869-82ee-151c1654f0ca","value":"Solicitar à VT o envio do processo"},{"id":"2381d3c6-7cf7-41ec-9fba-ee20ec7e8691","value":"Efetuar novas tentativas de citação"},{"id":"1e94c18d-9097-4481-8543-3ad70c28ee5b","value":"Aguardar data da audiência"},{"id":"76fb7e8b-05a2-4189-a5ea-5ffc2f44e4c1","value":"Citar a Ré"},{"id":"4c4ff955-cd81-46f1-aea6-821aafbc625c","value":"Realizar audi\rência"},{"id":"060c426a-bfa1-438c-bacc-bd5466295e6e","value":""},{"id":"9d7c75eb-4733-460a-8d45-ae46d41844de","value":""},{"id":"d08c46fc-5a9f-48f0-aa90-9615d3c1c21d","value":""},{"id":"2cab9a7e-f9dd-4282-99a3-0234470e203b","value":"Remeter à VT"},{"id":"8a9c4b45-29a4-4607-b4a7-3918adc40073","value":"Adiar audiência"},{"id":"424d5de9-0e54-4970-8281-6f7ab3fee467","value":""},{"id":"7c7d8cd1-0c01-433d-8f23-3ef183de6119","value":"Acordo realizado"},{"id":"453b3c05-979d-45b7-b615-0288959cf0cb","value":""},{"id":"e2903288-e0c2-4ae6-9699-d2ea41dd357a","value":"Efetuar registros"},{"id":"d842e7a2-66c8-4bba-bdcd-0236418abf92","value":"Remeter à VT"},{"id":"8b17d31d-760a-42f8-864f-578d951eb468","value":""},{"id":"f90f80d0-024b-48b5-b169-3badbb49314e","value":"Intimar parte ausente "},{"id":"b1f34e0d-0727-4f80-91ac-e89576dc7b6c"},{"id":"45d5c7fc-27c6-4ea3-b775-501daef91956"},{"id":"f36a025c-7f5f-4f23-8111-f48d2fba36a1"},{"id":"8d23e471-d6bc-46ab-8605-1074da0703b4"}]},{"containerId":"bda50616-6441-4420-b579-9512b86fd7ab","containerName":"Opção 2","isSubprocess":false,"elements":[{"id":"60cc420f-b6fd-4b47-b9ae-16516ca68aaf","value":"CIPOP CEJUSC"},{"id":"17240300-e228-4fec-9ba1-bf45486db6dd","value":"CEJUSC"},{"id":"17ecc54b-28e2-449c-9716-166b5e263383","value":"Citar a Ré"},{"id":"1f84aebf-3ae9-46f2-805f-40d9a8fae5fd","value":"Remeter à VT"},{"id":"ee4c1b9d-b810-4d06-9d5c-5dbc489da57e","value":"Efetuar novas tentativas de citação"},{"id":"757bbe4b-ebe6-441f-ac2a-b98016127cf1","value":"Remeter à VT"},{"id":"ff498284-812f-4260-82fb-430d6be37520","value":"Acordo realizado"},{"id":"9fdad732-1b07-4b28-bc98-27aec15f9325","value":""},{"id":"9f4382e2-e555-480a-806f-f7999a1849fe","value":"Adiar audiência"},{"id":"1ed7a4a9-1fd3-4c69-a1ff-8db3e8a41e21","value":""},{"id":"fc310060-9e27-41ca-8e3b-60e1f2f3bd15","value":"Ata de audiência"},{"id":"7d4fcecb-a225-4214-9ac6-8950c7902809","value":"Atade audiência"},{"id":"e120ca5d-f30f-42a2-b9dd-3cec4b59be5b","value":"Aguardar data da audiência"},{"id":"44754518-1f6f-4f01-85bd-90a7a0010ac3","value":"Efetuar registros"},{"id":"8e901808-c59a-4d40-9403-d29e73c7c5bb","value":"Receber processo e marcar audiência"},{"id":"765904b4-09ba-49d3-98af-b623d5c85033","value":""},{"id":"01963817-d114-40b9-af76-e7dbc89c7bae","value":"Solicitar à VT o envio do processo"},{"id":"29ea44dd-dcb1-403b-a746-be19217bd43c","value":"Processo distribuído a uma das Varas do Trabalho"},{"id":"65d7060f-5653-4382-a1c8-83263140d787","value":"Efetuar registros"},{"id":"b92e1c00-1aaa-4f07-bf55-af439c3bdafb","value":"Realizar audi\rência"},{"id":"b9dcdbb0-329a-407e-a677-ea9ea5fbf722","value":""},{"id":"d0281322-1033-4ce0-b798-5ae9a43bad98","value":""},{"id":"fe1c7c4d-7575-4949-9c00-f29added21b2","value":"Ata de audiência"},{"id":"2ab1d5be-b5d4-4288-ae55-62a10b9c4f62","value":""},{"id":"47225689-4941-41ad-8d3a-e5b3bbbc5230","value":""},{"id":"84fd5fd9-520a-4369-be71-1b3ac2c5f672"},{"id":"1075eff2-130b-4fa2-bb88-fd2524c1b397"},{"id":"bd826aea-5705-45b5-9072-9ba2f463d72d"},{"id":"ec0db6ad-286d-42b5-bd7e-3b732f5eb990"}]}]}