module github.com/rancher/fleet-e2e/tests

go 1.20

replace go.qase.io/client => github.com/rancher/qase-go/client v0.0.0-20231114201952-65195ec001fa

require (
	github.com/onsi/ginkgo/v2 v2.15.0
	github.com/onsi/gomega v1.31.1
	github.com/rancher-sandbox/ele-testhelpers v0.0.0-20231206161614-20a517410736
	github.com/rancher-sandbox/qase-ginkgo v1.0.1
	github.com/sirupsen/logrus v1.9.3
)

require (
	github.com/antihax/optional v1.0.0 // indirect
	github.com/bramvdbogaerde/go-scp v1.2.1 // indirect
	github.com/go-logr/logr v1.3.0 // indirect
	github.com/go-task/slim-sprig v0.0.0-20230315185526-52ccab3ef572 // indirect
	github.com/golang/protobuf v1.5.3 // indirect
	github.com/google/go-cmp v0.6.0 // indirect
	github.com/google/pprof v0.0.0-20230926050212-f7f687d19a98 // indirect
	github.com/pkg/errors v0.9.1 // indirect
	go.qase.io/client v0.0.0-20231114201952-65195ec001fa // indirect
	go.uber.org/atomic v1.10.0 // indirect
	go.uber.org/multierr v1.11.0 // indirect
	go.uber.org/zap v1.24.0 // indirect
	golang.org/x/crypto v0.16.0 // indirect
	golang.org/x/net v0.19.0 // indirect
	golang.org/x/oauth2 v0.0.0-20211005180243-6b3c2da341f1 // indirect
	golang.org/x/sys v0.15.0 // indirect
	golang.org/x/text v0.14.0 // indirect
	golang.org/x/tools v0.16.1 // indirect
	google.golang.org/appengine v1.6.6 // indirect
	google.golang.org/protobuf v1.28.0 // indirect
	gopkg.in/yaml.v2 v2.4.0 // indirect
	gopkg.in/yaml.v3 v3.0.1 // indirect
	libvirt.org/libvirt-go-xml v7.4.0+incompatible // indirect
)

replace github.com/rancher-sandbox/ele-testhelpers v0.0.0-20231206161614-20a517410736 => github.com/thehejik/ele-testhelpers v1.0.1
